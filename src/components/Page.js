import styled from 'styled-components';

import device from '../styles/device';

const Page = styled.div`
  color: ${(props) => props.theme.bodyColor};
  font-family: 'sans-serif';

  /* @media ${device.laptop} {
    text-align: left;
  } */
`;

export default Page;
