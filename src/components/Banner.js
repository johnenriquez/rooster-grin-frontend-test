import React from 'react';
import styled from 'styled-components';

import device from '../styles/device';
import { Split, SplitContent } from './Split';

const BannerWrapper = styled.div`
  position: relative;
  padding: 3em 2em;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 100vh rgba(255, 255, 255, 0.7);

  @media ${device.tablet} {
    padding: 5em 2em;
    box-shadow: none;
  }
`;

const Banner = ({ bg, content, right }) => (
  <BannerWrapper bg={bg}>
    <Split>
      {right ? (
        <>
          <SplitContent blank>&nbsp;</SplitContent>
          <SplitContent>{content}</SplitContent>
        </>
      ) : (
        <>
          <SplitContent>{content}</SplitContent>
          <SplitContent blank>&nbsp;</SplitContent>
        </>
      )}
    </Split>
  </BannerWrapper>
);

export default Banner;
