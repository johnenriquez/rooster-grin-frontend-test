import React from 'react';
import styled from 'styled-components';

// components
import SocialIcon from '../components/SocialIcon';

// assets
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';

const Footer = styled.footer`
  text-align: center;
`;

const PageFooter = () => (
  <Footer>
    <p>Follow Us:</p>
    <SocialIcon src={instagram} network='Instagram' />
    <SocialIcon src={facebook} network='Facebook' />
  </Footer>
);

export default PageFooter;
