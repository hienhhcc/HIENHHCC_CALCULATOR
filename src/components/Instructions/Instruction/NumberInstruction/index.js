import { useContext } from 'react';
import { ThemeContext } from '../../../../context/theme';
import { StyledIntruction } from '../styles';

const NumberInstruction = ({ name, operationType, dispatch }) => {
  const { theme } = useContext(ThemeContext);

  const onClickNumber = () => {
    if (name !== '.') {
      dispatch({ type: 'number', payload: name });
    } else {
      dispatch({ type: 'dot' });
    }
  };

  return (
    <StyledIntruction
      operationType={operationType}
      customTheme={theme}
      onClick={onClickNumber}
    >
      {name}
    </StyledIntruction>
  );
};

export default NumberInstruction;
