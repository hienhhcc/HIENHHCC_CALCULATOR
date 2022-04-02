import Instruction from './Instruction';

import { StyledIntructions } from './styles';

const Instructions = ({ input, dispatch }) => {
  const instructions = [
    {
      name: '7',
      numberButton: true,
    },
    {
      name: '8',
      numberButton: true,
    },
    {
      name: '9',
      numberButton: true,
    },
    {
      name: 'DEL',
    },
    {
      name: '4',
      numberButton: true,
    },
    {
      name: '5',
      numberButton: true,
    },
    {
      name: '6',
      numberButton: true,
    },
    {
      name: '+',
      numberButton: true,
    },

    {
      name: '1',
      numberButton: true,
    },
    {
      name: '2',
      numberButton: true,
    },

    {
      name: '3',
      numberButton: true,
    },
    {
      name: '-',
      numberButton: true,
    },
    {
      name: '.',
      numberButton: true,
    },
    {
      name: '0',
      numberButton: true,
    },
    {
      name: '/',
      numberButton: true,
    },
    {
      name: '\u00D7',
    },
    {
      name: 'Reset',
    },
    {
      name: '=',
    },
  ];
  return (
    <StyledIntructions>
      {instructions.map(({ name, numberButton }) => (
        <Instruction
          name={name}
          numberButton={numberButton}
          input={input}
          dispatch={dispatch}
          key={name}
        />
      ))}
    </StyledIntructions>
  );
};

export default Instructions;
