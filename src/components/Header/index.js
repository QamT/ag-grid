import React from 'react';
import { Link } from "react-router-dom";

import { HeaderWrapper, LinkWrapper } from './styles';

const Header = () => (
  <HeaderWrapper>
    <h2>Ag-grid App</h2>
    <LinkWrapper>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add</Link>
    </LinkWrapper>
  </HeaderWrapper>
);


export default Header;
