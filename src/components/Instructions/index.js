import Instruction from './Instruction';

import { StyledIntructions } from './styles';

const Instructions = ({ input, dispatch }) => {
  const instructions = [
    {
      name: 'AC',
      // onClick: () => {
      //   setInput([0]);
      // },
    },
    {
      name: '+/-',
      // onClick: () => {
      //   if (input.length === 1) {
      //     setInput((previousInput) => [-previousInput[0]]);
      //   } else if (input.length === 2) {
      //     setInput((previousInput) => [-previousInput[0], previousInput[1]]);
      //   } else {
      //     setInput((previousInput) => [
      //       previousInput[0],
      //       previousInput[1],
      //       -previousInput[2],
      //     ]);
      //   }
      // },
    },
    {
      name: '%',
    },
    {
      name: '÷',
    },
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
      name: '\u00D7',
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
      name: '-',
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
      name: '+',
    },
    {
      name: '0',
      numberButton: true,
    },
    {
      name: '.',
      numberButton: true,
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
