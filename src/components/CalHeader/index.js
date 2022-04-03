import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import { CalHeaderStyled, ThemePickerContainerStyled } from './styles/index';

import ThemeSwitch from './ThemeSwitch';

const CalHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <CalHeaderStyled customTheme={theme}>
      <h1>calc</h1>
      <ThemePickerContainerStyled customTheme={theme}>
        <span>Theme</span>
        <ThemeSwitch />
      </ThemePickerContainerStyled>
    </CalHeaderStyled>
  );
};

export default CalHeader;
