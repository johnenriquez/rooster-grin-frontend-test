import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  text-align: center;
  padding: 2em;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = ({ bg, content }) => (
  <HeroWrapper bg={bg}>
    <HeroInner>{content}</HeroInner>
  </HeroWrapper>
);

export default Hero;
