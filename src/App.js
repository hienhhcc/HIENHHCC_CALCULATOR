import {} from './components';
import Calculator from './containers/Calculator';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
  return (
    <>
      <Calculator />
      <GlobalStyle />
    </>
  );
};

export default App;
