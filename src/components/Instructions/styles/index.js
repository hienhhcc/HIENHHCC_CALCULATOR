import styled from 'styled-components';

export const StyledIntructions = styled.div`
  background: ${(props) => props.customTheme.keypad};
  height: 80%;
  padding: 1rem;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  button:nth-of-type(17) {
    grid-column: 1 / span 2;
  }
  button:nth-of-type(18) {
    grid-column: 3 / span 2;
  }
`;
