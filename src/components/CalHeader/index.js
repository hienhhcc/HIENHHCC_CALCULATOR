import { CalHeaderStyled, ThemePickerContainerStyled } from './styles/index';

import ThemeSwitch from './ThemeSwitch';

const CalHeader = () => {
  return (
    <CalHeaderStyled>
      <h1>calc</h1>
      <ThemePickerContainerStyled>
        <span>Theme</span>
        <ThemeSwitch />
      </ThemePickerContainerStyled>
    </CalHeaderStyled>
  );
};

export default CalHeader;
