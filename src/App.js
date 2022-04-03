import { useMemo, useState } from 'react';

import Calculator from './containers/Calculator';
import { GlobalStyle } from './styles/globalStyles';

import { ThemeContext } from './context/theme';
import { themes } from './utils/constants';

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Calculator />
      <GlobalStyle customTheme={theme} />
    </ThemeContext.Provider>
  );
};

export default App;
