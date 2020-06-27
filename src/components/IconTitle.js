import React from 'react';
import styled from 'styled-components';
import Rotate from 'react-reveal/Rotate';

import device from '../styles/device';

const IconTitleOuter = styled.div`
  display: inline-block;
  margin: 0.5em;
  text-align: center;
`;

const IconWrapper = styled.div`
  border: 2px solid purple;
  margin: 0.5em auto;
  border-radius: 100%;
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const IconTitle = ({ src, title, delay }) => (
  <IconTitleOuter>
    <IconWrapper>
      <Rotate delay={delay}>
        <Icon src={src} alt={`Icon for ${src}`} />
      </Rotate>
    </IconWrapper>
    <Title>{title}</Title>
  </IconTitleOuter>
);
