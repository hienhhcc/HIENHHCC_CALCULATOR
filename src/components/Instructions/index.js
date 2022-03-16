import Instruction from './Instruction';

import { StyledIntructions } from './styles';

const Instructions = () => {
  const instructions = [
    {
      name: 'AC',
      onClick: () => {
        console.log('hello');
      },
      isOperator: true,
    },
    {
      name: '+/-',
      onClick: () => {
        console.log('hello');
      },
      isOperator: true,
    },
    {
      name: '%',
      onClick: () => {
        console.log('hello');
      },
      isOperator: true,
    },
    {
      name: '÷',
      onClick: () => {
        console.log('hello');
      },
      isOperator: true,
    },
    {
      name: '7',
      onClick: () => {
        console.log('hello');
      },
      isOperator: false,
    },
    {
      name: '8',
      onClick: () => {
        console.log('hello');
      },
      isOperator: false,
    },
    {
      name: '9',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '\u00D7',
      onClick: () => {},
      isOperator: true,
    },
    {
      name: '4',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '5',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '6',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '-',
      onClick: () => {},
      isOperator: true,
    },
    {
      name: '1',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '2',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '3',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '+',
      onClick: () => {},
      isOperator: true,
    },
    {
      name: '0',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '.',
      onClick: () => {},
      isOperator: false,
    },
    {
      name: '=',
      onClick: () => {},
      isOperator: true,
    },
  ];
  return (
    <StyledIntructions>
      {instructions.map(({ name, onClick, isOperator }) => (
        <Instruction name={name} onClick={onClick} isOperator={isOperator} />
      ))}
    </StyledIntructions>
  );
};

export default Instructions;
