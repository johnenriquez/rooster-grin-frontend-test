import React from 'react';
import styled from 'styled-components';

import logoWhiteUrl from '../assets/logo-white.svg';

const Nav = styled.nav`
  height: 4em;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -4em;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Navbar = () => (
  <Nav>
    <Logo src={logoWhiteUrl} alt='Rooster Grin Logo' />
  </Nav>
);

export default Navbar;
