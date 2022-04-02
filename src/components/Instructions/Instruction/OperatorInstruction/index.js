import { DIVIDEBY0, MODULOBY0 } from '../../../../utils/constants';
import { StyledIntruction } from '../styles';

const OperatorInstruction = ({ name, dispatch, input }) => {
  const onClickOperator = () => {
    if (['+', '-', '÷', '%', '\u00D7'].includes(name)) {
      dispatch({ type: 'operator', payload: name });
    } else if (name === '=') {
      dispatch({ type: 'equal' });
    } else if (name === 'AC') {
      dispatch({ type: 'clear' });
    } else if (name === '+/-') {
      dispatch({ type: 'negate' });
    }
  };

  let content = (
    <StyledIntruction onClick={onClickOperator}>
      {name}
    </StyledIntruction>
  );

  if ((input[0] === DIVIDEBY0 || input[0] === MODULOBY0) && name !== 'AC') {
    content = (
      <StyledIntruction onClick={onClickOperator} disabled>
        {name}
      </StyledIntruction>
    );
  }

  return content;
};

export default OperatorInstruction;
