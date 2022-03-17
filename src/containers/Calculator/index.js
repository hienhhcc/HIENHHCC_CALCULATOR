import { useReducer } from 'react';
import { DisplayBox, Instructions } from '../../components';
import { DIVIDEBY0, MODULOBY0 } from '../../utils/constants';

import { StyledCalculator } from './styles';

const calculateHelper = (number1, operator, number2) => {
  let result;
  if (operator === '+') {
    result = +number1 + +number2;
  } else if (operator === '-') {
    result = +number1 - +number2;
  } else if (operator === '\u00D7') {
    result = +number1 * +number2;
  } else if (operator === '÷') {
    if (+number2 === 0) return DIVIDEBY0;
    result = +number1 / +number2;
  } else if (operator === '%') {
    if (+number2 === 0) return MODULOBY0;
    result = +number1 % +number2;
  }
  return result;
};

const inputReducer = (input, action) => {
  let newInput = input.slice();
  switch (action.type) {
    case 'number':
      if (newInput.length === 1) {
        if (newInput[0] !== DIVIDEBY0 && newInput[0] !== MODULOBY0) {
          newInput[0] = (+newInput[0].concat(action.payload)).toString();
        } else {
          newInput[0] = action.payload;
        }
      } else if (newInput.length === 2) {
        newInput[2] = action.payload;
      } else {
        newInput[2] = (+newInput[2].concat(action.payload)).toString();
      }
      return newInput;
    case 'operator':
      //+ - * / %
      if (newInput.length <= 2) {
        newInput[1] = action.payload;
      } else {
        newInput[0] = calculateHelper(newInput[0], newInput[1], newInput[2]);
        newInput[1] = action.payload;
        newInput.pop(); // Pop index 2
      }
      return newInput;
    case 'equal':
      // =
      if (newInput.length === 1) return newInput;
      else if (newInput.length === 2) {
        newInput[0] = calculateHelper(newInput[0], newInput[1], newInput[0]);
        newInput.pop();
      } else {
        newInput[0] = calculateHelper(newInput[0], newInput[1], newInput[2]);
        newInput.pop();
        newInput.pop();
      }
      return newInput;
    case 'clear':
      return ['0'];
    case 'negate':
      if (newInput.length <= 2) {
        newInput[0] = -newInput[0];
      } else {
        newInput[2] = -newInput[2];
      }
      return newInput;
    default:
      return ['0'];
  }
};

const Calculator = () => {
  const [input, dispatch] = useReducer(inputReducer, ['0']); //[8,*,9]

  return (
    <StyledCalculator>
      <DisplayBox input={input} />
      <Instructions input={input} dispatch={dispatch} />
    </StyledCalculator>
  );
};

export default Calculator;
