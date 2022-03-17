import { StyledDisplayBox, StyledSpan } from './styles';

const DisplayBox = ({ input }) => {
  return (
    <StyledDisplayBox>
      {input.map((i) => (
        <StyledSpan key={i + Math.random()}>{i}</StyledSpan>
      ))}
    </StyledDisplayBox>
  );
};

export default DisplayBox;
