import { StyledIntruction } from './styles';

const Instruction = ({ name, onClick, isOperator }) => {
  console.log(isOperator);
  return (
    <StyledIntruction onClick={onClick} isOperator={isOperator}>
      {name}
    </StyledIntruction>
  );
};

export default Instruction;
