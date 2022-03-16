import { DisplayBox, Instructions } from '../../components';

import { StyledCalculator } from './styles';

const Calculator = () => {
  return (
    <StyledCalculator>
      <DisplayBox />
      <Instructions />
    </StyledCalculator>
  );
};

export default Calculator;
