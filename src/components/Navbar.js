import React from 'react';
import styled from 'styled-components';

import logoColorUrl from '../assets/logo-color.svg';

const Nav = styled.nav`
  padding: 0.5em;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Navbar = () => (
  <Nav>
    <Logo src={logoColorUrl} alt='Rooster Grin Logo' />
  </Nav>
);

export default Navbar;
