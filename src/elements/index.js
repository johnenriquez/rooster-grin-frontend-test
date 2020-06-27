import styled from 'styled-components';

export const Button = styled.button`
  appearance: none;
  background-color: ${(props) => (props.color ? props.color : 'orange')};
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
`;

export const ContentHeading = styled.h2`
  color: ${(props) => (props.altStyle ? 'black' : 'purple')};

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: purple;
`;
