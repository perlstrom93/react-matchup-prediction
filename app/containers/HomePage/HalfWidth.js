import styled from 'styled-components';

const HalfWidth = styled.div`
  display: inline-block;
  padding: 0 10px;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default HalfWidth;
