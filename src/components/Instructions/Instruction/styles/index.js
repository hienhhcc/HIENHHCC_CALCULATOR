import styled from 'styled-components';

export const StyledIntruction = styled.button`
  border: 1px solid #000;
  font: inherit;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isOperator ? 'orange' : 'white')};

  &:active {
    background-color: #C5C5C5;
  }
`;
