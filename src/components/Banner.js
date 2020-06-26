import React from 'react';
import styled from 'styled-components';

import { Split, SplitContent } from './Split';

const BannerWrapper = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  padding: 5em 2em;
`;

const Banner = ({ bg, content, right }) => (
  <BannerWrapper bg={bg}>
    <Split>
      {right ? (
        <>
          <SplitContent>&nbsp;</SplitContent>
          <SplitContent>{content}</SplitContent>
        </>
      ) : (
        <>
          <SplitContent>{content}</SplitContent>
          <SplitContent>&nbsp;</SplitContent>
        </>
      )}
    </Split>
  </BannerWrapper>
);

export default Banner;
