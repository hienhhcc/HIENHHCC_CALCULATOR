import styled from 'styled-components';

export const CalHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${(props) => props.customTheme.textHeaderDisplay};
  }
`;

export const ThemePickerContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  color: ${(props) => props.customTheme.textHeaderDisplay};
  font-weight: bold;

  span {
    margin-right: 20px;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;
