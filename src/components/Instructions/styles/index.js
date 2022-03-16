import styled from 'styled-components';

export const StyledIntructions = styled.div`
  background: orange;
  height: 80%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  button:nth-of-type(17) {
    grid-column: 1 / span 2;
  }
`;
