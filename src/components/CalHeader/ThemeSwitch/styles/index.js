import styled from 'styled-components';

export const ThemeSwitchStyled = styled.div`
  display: flex;
  position: relative;
  align-self: flex-start;
  justify-content: space-around;
  height: 45px;
  width: 100px;
  margin-top: -17px;

  label {
    font-size: 0.7rem;
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    z-index: 5;
  }

  input:nth-of-type(1):checked ~ span::before {
    left: 15px;
  }
  input:nth-of-type(2):checked ~ span::before {
    left: 50px;
  }
  input:nth-of-type(3):checked ~ span::before {
    left: 83px;
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  span {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 26px;
    border-radius: 20px;
    background-color: hsl(222, 26%, 31%);

    &::before {
      position: absolute;
      content: '';
      left: 15px;
      width: 16px;
      height: 16px;
      transform: translate(-50%, -50%);
      top: 50%;
      border-radius: 50%;
      background: orange;
    }
  }
`;
