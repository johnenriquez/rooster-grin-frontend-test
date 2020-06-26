import React from 'react';
import styled from 'styled-components';

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
    <Icon src={src} alt={`${network} social icon`} />
  </SocialIconWrapper>
);

export default SocialIcon;
