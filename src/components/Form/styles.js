import styled from 'styled-components';

import { theme } from 'styles';

const FormWrapper = styled.form`
  background-color: #fff;
  border: 1px solid #e0e6e8;
  border-radius: ${theme.borderRadius};
  padding: 2.4rem 3rem;
  text-align: center;

  h4 {
    color: #222;
    margin-bottom: 1.7rem;
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  button {
    background: ${theme.colors.primaryColor};
    border-radius: ${theme.borderRadius};
    color: #fff;
    margin-top: 1rem;
    padding: .3rem 3rem;
    cursor: pointer;
    font-size: 1.05rem;
    text-align: center;

    &:disabled {
      background-color: #cccccc;
      color: #666666;
    }
  }
`;

const InputWrapper = styled.div`
  margin: 1rem 0;
  text-align: left;

  & label {
    margin-right: .4rem;
    font-size: .9rem;
  }

  input {
    padding: .3rem;
    border-radius: ${theme.borderRadius};
    background-color: #fff;
    border: 2px solid #e0e6e8;
    transition: border .15s;

    &:active,
    &:focus {
      outline: none;
      border-color: ${theme.colors.primaryColor};
    }
  }
`;

export { FormWrapper, InputWrapper };
