import styled from 'styled-components';

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  padding: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }
`;
