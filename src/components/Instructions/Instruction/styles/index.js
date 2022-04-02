import styled from 'styled-components';

export const StyledIntruction = styled.button`
  font: inherit;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.isOperator ? 'orange' : 'hsl(45, 7%, 89%)'};
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px hsl(35, 11%, 61%);
  min-width: 80px;
  min-height: 50px;

  &:active {
    background-color: #c5c5c5;
  }
`;
