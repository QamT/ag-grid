import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

it('renders without crashing', () => {
  shallow(<HomePage columnDefs={[]} rowData={[]} />);
});
