import React from 'react';
import styled from 'styled-components';

import device from '../styles/device';

export const Split = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }

  & > * {
    grid-column: span 1;
  }
`;

export const SplitContentWrapper = styled.div`
  display: ${(props) => (props.blank ? 'none' : 'block')};
  padding: 3em 2em;

  @media ${device.tablet} {
    padding: 5em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    &:last-child {
      align-items: flex-start;
    }
  }
`;

export const SplitContentInner = styled.div`
  display: block;
  @media ${device.tablet} {
    width: 300px;
  }
  @media ${device.laptop} {
    width: 500px;
  }
`;

export const SplitContent = ({ children, blank }) => (
  <SplitContentWrapper blank={blank}>
    <SplitContentInner>{children}</SplitContentInner>
  </SplitContentWrapper>
);

export const ImageCover = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  padding-bottom: 56%;
`;
