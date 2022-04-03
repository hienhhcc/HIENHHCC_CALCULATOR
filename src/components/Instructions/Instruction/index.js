import NumberInstruction from './NumberInstruction';
import OperatorInstruction from './OperatorInstruction';

const Instruction = ({ name, isNumberButton, type, dispatch, input }) => {
  //Number instructions
  if (isNumberButton) {
    return (
      <NumberInstruction name={name} operationType={type} dispatch={dispatch} />
    );
  }

  //Operator instructions
  return (
    <OperatorInstruction
      name={name}
      operationType={type}
      dispatch={dispatch}
      input={input}
    />
  );
};

export default Instruction;
