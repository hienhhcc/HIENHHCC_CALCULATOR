import styled from 'styled-components';

export const StyledDisplayBox = styled.div`
  background: ${(props) => props.customTheme.backgroundDisplay};
  height: 20%;
  text-align: right;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: flex-end;
  justify-content: center;
  padding: 0.7rem;
  color: #333;
  font-weight: bold;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  height: 140px;
`;

export const StyledPrevious = styled.div`
  color: ${(props) => props.customTheme.textHeaderDisplay};
  font-size: 1.1rem;
  opacity: 0.5;
`;
export const StyledDisplayValue = styled.div`
  color: ${(props) => props.customTheme.textHeaderDisplay};
  justify-self: flex-end;
  opacity: 1;
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.customTheme.textHeaderDisplay};

  &:not(:last-child) {
    margin-right: 0.2rem;
  }
`;
