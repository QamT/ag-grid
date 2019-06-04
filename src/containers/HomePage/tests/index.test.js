import React from 'react';
import { shallow } from 'enzyme';
import HomePage from 'container/HomePage';

it('renders without crashing', () => {
  shallow(<HomePage columnDefs={[]} rowData={[]} />);
});
