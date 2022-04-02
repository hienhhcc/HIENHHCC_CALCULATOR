import { useState } from 'react';
import { ThemeSwitchStyled } from './styles/index';

const ThemeSwitch = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState(true);
  // const [isLightTheme, setIsLightTheme] = useState(false);
  // const [isNeonTheme, setIsNeonTheme] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('dark');

  const onClickDarkTheme = (event) => {
    setSelectedTheme('dark');
  };
  const onClickLightTheme = (event) => {
    setSelectedTheme('light');
  };
  const onClickNeonTheme = (event) => {
    setSelectedTheme('neon');
  };

  return (
    <ThemeSwitchStyled>
      <label htmlFor="dark-theme" aria-label="Toggle dark theme">
        1
      </label>
      <input
        type="radio"
        name="theme-switch"
        id="dark-theme"
        checked={selectedTheme === 'dark'}
        onChange={onClickDarkTheme}
      />
      <label htmlFor="light-theme" aria-label="Toggle light theme">
        2
      </label>
      <input
        type="radio"
        name="theme-switch"
        id="light-theme"
        checked={selectedTheme === 'light'}
        onChange={onClickLightTheme}
      />
      <label htmlFor="neon-theme" aria-label="Toggle neon theme">
        3
      </label>
      <input
        type="radio"
        name="theme-switch"
        id="neon-theme"
        checked={selectedTheme === 'neon'}
        onChange={onClickNeonTheme}
      />
      <span></span>
    </ThemeSwitchStyled>
  );
};

export default ThemeSwitch;
