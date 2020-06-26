import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  text-align: center;
  display: inline-block;
  padding: 1em;
`;

const Icon = styled.img`
  width: 60px;
  height: auto;
`;

const Title = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;

const IconTitle = ({ src, title }) => (
  <IconWrapper>
    <Icon src={src} alt={`Icon for ${src}`} />
    <Title>{title}</Title>
  </IconWrapper>
);

export default IconTitle;
