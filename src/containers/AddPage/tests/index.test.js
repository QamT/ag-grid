import React from 'react';
import { shallow } from 'enzyme';
import AddPage from 'container/AddPage';

it('renders without crashing', () => {
  shallow(<AddPage addData={jest.fn()} />);
});
