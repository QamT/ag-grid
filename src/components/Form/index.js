import React, { useState } from 'react';
import { withRouter } from "react-router";

import { useForm, data } from 'utils';
import { FormWrapper, InputWrapper } from './styles';

const Form = ({ addData, history }) => {
  const { inputs, handleInputChange, handleSubmit } = useForm(redirectHome);
  const [country, setCountry] = useState(inputs.country || 'US');

  function redirectHome() {
    const { name, country, state, zipCode } = inputs;
    addData({ name, country, state, zipCode });
    history.push('/');
  };

  const onSelectChange = e => {
    handleInputChange(e);
    setCountry(e.target.value);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h4>Add Data</h4>
      <InputWrapper>
        <label>Name</label>
        <input type="text" name="name" placeholder='enter your name' onChange={handleInputChange} value={inputs.name} required />
      </InputWrapper>
      <InputWrapper>
        <label>Country</label>
        <select value={inputs.country} name='country' onChange={onSelectChange} required>
          {data.getCountries().map(({ shortName, name }, i) => <option key={i} value={shortName}>{name}</option>)}
        </select>
      </InputWrapper>
      <InputWrapper>
        <label>State</label>
        <select value={inputs.state} name='state' onChange={handleInputChange} required>
          {data.getStates(country).map((state, i) => <option key={i} value={state}>{state}</option>)}
        </select>
      </InputWrapper>
      <InputWrapper>
        <label>Zip Code</label>
        <input type="number" placeholder='enter your zip code' name="zipCode" onChange={handleInputChange} value={inputs.zipCode} required />
      </InputWrapper>
      <button type="submit" disabled={!inputs.state}>Add</button>
    </FormWrapper>
  )
}

export default withRouter(Form);
