import { createContext } from 'react';

import { themes } from '../utils/constants';

export const ThemeContext = createContext({
  theme: themes.dark,
  setTheme: () => {},
});
