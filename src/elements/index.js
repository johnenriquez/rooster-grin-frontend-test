import styled from 'styled-components';

export const Button = styled.a`
  background-color: ${(props) => (props.color ? props.color : 'orange')};
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  transition: all 0.5s;

  &:hover {
    color: ${(props) => (props.color ? props.color : 'orange')};
    background-color: #fff;
    cursor: pointer;
  }
`;

export const ContentHeading = styled.h2`
  color: ${(props) => (props.altStyle ? 'black' : 'purple')};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.7em;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: purple;

  &:hover {
    text-decoration: underline;
  }
`;
