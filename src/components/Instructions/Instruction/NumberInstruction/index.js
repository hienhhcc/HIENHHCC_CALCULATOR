import { StyledIntruction } from '../styles';

const NumberInstruction = ({ name, dispatch }) => {
  const onClickNumber = () => {
    if (name !== '.') {
      dispatch({ type: 'number', payload: name });
    } else {
      dispatch({ type: 'dot' });
    }
  };

  return <StyledIntruction onClick={onClickNumber}>{name}</StyledIntruction>;
};

export default NumberInstruction;
