import { useContext } from 'react';

import { ThemeSwitchStyled } from './styles/index';

import { ThemeContext } from '../../../context/theme';
import { themes } from '../../../utils/constants';

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // const [selectedTheme, setSelectedTheme] = useState('dark');
  const onClickDarkTheme = () => {
    setTheme(themes.dark);
  };
  const onClickLightTheme = () => {
    setTheme(themes.light);
  };
  const onClickNeonTheme = () => {
    setTheme(themes.neon);
  };

  return (
    <ThemeSwitchStyled customTheme={theme}>
      <label htmlFor="dark-theme" aria-label="Toggle dark theme">
        1
      </label>
      <input
        type="radio"
        name="theme-switch"
        id="dark-theme"
        checked={theme === themes.dark}
        onChange={onClickDarkTheme}
      />
      <label htmlFor="light-theme" aria-label="Toggle light theme">
        2
      </label>
      <input
        type="radio"
        name="theme-switch"
        id="light-theme"
        checked={theme === themes.light}
        onChange={onClickLightTheme}
      />
      <label htmlFor="neon-theme" aria-label="Toggle neon theme">
        3
      </label>
      <input
        type="radio"
        name="theme-switch"
        id="neon-theme"
        checked={theme === themes.neon}
        onChange={onClickNeonTheme}
      />
      <span></span>
    </ThemeSwitchStyled>
  );
};

export default ThemeSwitch;
