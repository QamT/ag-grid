import React from 'react';
import { shallow } from 'enzyme';
import AddPage from '../index';

it('renders without crashing', () => {
  shallow(<AddPage addData={jest.fn()} />);
});
