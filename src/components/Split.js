import React from 'react';
import styled from 'styled-components';
import device from '../styles/device';

export const Split = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  & > * {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  & > *:last-child {
    align-items: flex-start;
  }
`;

export const SplitContentWrapper = styled.div`
  padding: 5em 2em;
`;

export const SplitContentInner = styled.div`
  width: ${(props) => props.theme.splitContentMaxWidth};
`;

export const SplitContent = ({ children }) => (
  <SplitContentWrapper>
    <SplitContentInner>{children}</SplitContentInner>
  </SplitContentWrapper>
);

export const ImageCover = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
`;
