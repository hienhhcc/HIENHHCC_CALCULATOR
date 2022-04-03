import styled from 'styled-components';

export const StyledIntruction = styled.button`
  font: inherit;
  font-size: ${(props) =>
    props.operationType === 'normal' ? '1.8rem' : '1.4rem'};
  font-weight: 900;
  cursor: pointer;
  background-color: ${(props) =>
    props.operationType === 'normal'
      ? props.customTheme.key
      : props.operationType === 'function'
      ? props.customTheme.keyFunction
      : props.customTheme.keyEqual};
  box-shadow: 0 4px
    ${(props) =>
      props.operationType === 'normal'
        ? props.customTheme.keyShadow
        : props.operationType === 'function'
        ? props.customTheme.keyFunctionShadow
        : props.customTheme.keyEqualShadow};
  color: ${(props) =>
    props.operationType === 'normal'
      ? props.customTheme.textPrimary
      : props.customTheme.textSecondary};
  border: none;
  border-radius: 10px;

  min-width: 80px;
  min-height: 50px;

  &:active {
    background-color: #c5c5c5;
  }
`;
