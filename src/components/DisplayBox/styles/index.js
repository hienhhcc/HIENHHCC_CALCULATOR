import styled from 'styled-components';

export const StyledDisplayBox = styled.div`
  background: ${(props) => props.customTheme.backgroundDisplay};
  height: 20%;
  text-align: right;

  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0.7rem;
  color: #333;
  font-weight: bold;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  height: 140px;
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.customTheme.textHeaderDisplay};

  &:not(:last-child) {
    margin-right: 0.2rem;
  }
`;
