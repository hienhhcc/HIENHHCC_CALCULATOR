import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import { StyledDisplayBox, StyledSpan } from './styles';

const DisplayBox = ({ input }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledDisplayBox customTheme={theme}>
      {input.map((i) => (
        <StyledSpan key={i + Math.random()} customTheme={theme}>
          {i}
        </StyledSpan>
      ))}
    </StyledDisplayBox>
  );
};

export default DisplayBox;
