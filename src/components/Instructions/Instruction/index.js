import NumberInstruction from './NumberInstruction';
import OperatorInstruction from './OperatorInstruction';

const Instruction = ({ name, numberButton, dispatch, input }) => {
  //Number instructions
  if (numberButton) {
    return <NumberInstruction name={name} dispatch={dispatch} />;
  }

  //Operator instructions
  return <OperatorInstruction name={name} dispatch={dispatch} input={input} />;
};

export default Instruction;
