import { useEffect, useReducer } from 'react';
import { CalHeader, DisplayBox, Instructions } from '../../components';
import { DIVIDEBY0, MODULOBY0 } from '../../utils/constants';

import { StyledCalculator } from './styles';

const initialState = {
  result: '',
  input: ['0'],
};

const calculateHelper = (number1, operator, number2) => {
  let result;
  if (number2[number2.length - 1] === '.') {
    number2 = number2.slice(0, number2.length - 1);
  }
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

const inputReducer = (state, action) => {
  let newState = { ...state, input: [...state.input] };
  let { input } = newState;
  switch (action.type) {
    case 'delete':
      if (input[0] === DIVIDEBY0 || input[0] === MODULOBY0) {
        return initialState;
      }

      if (input.length === 1 && input[0].length === 1) {
        input[0] = '0';
        return newState;
      }

      if (input.length === 1) {
        input[0] = input[0].slice(0, input[0].length - 1);
      } else if (input.length === 3) {
        if (input[2].length === 1) input[2] = '0';
        else input[2] = input[2].slice(0, input[2].length - 1);
      }
      return newState;
    case 'number':
      if (
        (input[0] === DIVIDEBY0 || input[0] === MODULOBY0) &&
        newState.result !== ''
      ) {
        input[0] = action.payload;
        newState.result = '';
        return newState;
      }
      if (input.length === 1) {
        input[0] = (+input[0].concat(action.payload)).toString();
      } else if (input.length === 2) {
        input[2] = action.payload;
      } else {
        input[2] = (+input[2].concat(action.payload)).toString();
      }
      return newState;
    case 'operator':
      //+ - * / %
      if (input.length <= 2) {
        input[1] = action.payload;
      } else {
        input[0] = calculateHelper(input[0], input[1], input[2]).toString();
        input[1] = action.payload;
        input.pop(); // Pop index 2
        newState.result = input[0];
      }
      return newState;
    case 'equal':
      // =
      if (input.length === 1) return newState;
      else if (input.length === 2) {
        input[0] = calculateHelper(input[0], input[1], input[0]).toString();
        input.pop();
      } else {
        input[0] = calculateHelper(input[0], input[1], input[2]).toString();
        input.pop();
        input.pop();
      }
      newState.result = input[0];
      return newState;
    case 'clear':
      return initialState;
    case 'negate':
      if (input.length <= 2) {
        input[0] = (-input[0]).toString();
      } else {
        input[2] = (-input[2]).toString();
      }
      return newState;
    case 'dot':
      if (newState.result === '') {
        if (input.length === 1) {
          if (input[0][input[0].length - 1] === '.') {
            return newState;
          }
          input[0] = input[0] + '.';
        } else if (input.length === 2) {
          input[2] = '0.';
        } else {
          if (input[2][input[2].length - 1] === '.') {
            return newState;
          }
          input[2] = input[2] + '.';
        }
      } else {
        newState.result = '';
        if (input.length === 1) {
          input[0] = '0.';
        } else {
          input[2] = '0.';
        }
      }

      return newState;
    default:
      return ['0'];
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(inputReducer, initialState); //[8,*,9]

  useEffect(() => {
    const onKeyDown = (e) => {
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const operator = ['+', '-', '*', '/', '.', 'Delete', '=', 'Enter'];
      if (numbers.includes(e.key)) {
        dispatch({ type: 'number', payload: e.key.toString() });
      } else if (operator.includes(e.key)) {
        if (e.key === '.') {
          dispatch({ type: 'dot' });
          return;
        }
        if (['+', '-', '/', '*'].includes(e.key)) {
          let payload = e.key;
          if (e.key === '/') payload = '÷';
          else if (e.key === '*') payload = '\u00D7';
          dispatch({ type: 'operator', payload: payload });
        } else if (e.key === '=' || e.key === 'Enter') {
          dispatch({ type: 'equal' });
        } else if (e.key === 'Del') {
          dispatch({ type: 'delete' });
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <StyledCalculator>
      <CalHeader />
      <DisplayBox input={state.input} />
      <Instructions input={state.input} dispatch={dispatch} />
    </StyledCalculator>
  );
};

export default Calculator;
