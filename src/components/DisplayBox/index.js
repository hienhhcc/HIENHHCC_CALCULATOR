import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import {
  StyledDisplayBox,
  StyledDisplayValue,
  StyledPrevious,
  StyledSpan,
} from './styles';

const DisplayBox = ({ input }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledDisplayBox customTheme={theme}>
      <StyledPrevious customTheme={theme}>
        {input.length > 1
          ? input.map((i) => (
              <StyledSpan key={i + Math.random()} customTheme={theme}>
                {i}
              </StyledSpan>
            ))
          : null}
      </StyledPrevious>
      <StyledDisplayValue customTheme={theme}>
        {input.length <= 2 ? input[0] : input[2]}
      </StyledDisplayValue>
    </StyledDisplayBox>
  );
};

export default DisplayBox;
