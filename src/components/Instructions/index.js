import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import Instruction from './Instruction';

import { StyledIntructions } from './styles';

const Instructions = ({ input, dispatch }) => {
  const { theme } = useContext(ThemeContext);

  const instructions = [
    {
      name: '7',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '8',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '9',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: 'Del',
      type: 'function',
    },
    {
      name: '4',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '5',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '6',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '+',
      type: 'normal',
    },

    {
      name: '1',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '2',
      type: 'normal',
      isNumberButton: true,
    },

    {
      name: '3',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '-',
      type: 'normal',
    },
    {
      name: '.',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '0',
      type: 'normal',
      isNumberButton: true,
    },
    {
      name: '÷',
      type: 'normal',
    },
    {
      name: '\u00D7',
      type: 'normal',
    },
    {
      name: 'Reset',
      type: 'function',
    },
    {
      name: '=',
      type: 'equal',
    },
  ];
  return (
    <StyledIntructions customTheme={theme}>
      {instructions.map(({ name, type, isNumberButton }) => (
        <Instruction
          name={name}
          type={type}
          isNumberButton={isNumberButton}
          input={input}
          dispatch={dispatch}
          key={name}
        />
      ))}
    </StyledIntructions>
  );
};

export default Instructions;
