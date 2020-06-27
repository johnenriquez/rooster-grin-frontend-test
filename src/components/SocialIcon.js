import React from 'react';
import styled from 'styled-components';

import { Link } from '../elements';

const SocialIconWrapper = styled.div`
  display: inline;
  padding: 1em;
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
`;

const SocialIcon = ({ src, network }) => (
  <SocialIconWrapper>
    <Link href='#!'>
      <Icon src={src} alt={`${network} social icon`} />
    </Link>
  </SocialIconWrapper>
);

export default SocialIcon;
