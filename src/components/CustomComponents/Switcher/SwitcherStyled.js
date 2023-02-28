import styled from 'styled-components';
export const SwitcherWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  //   justify-content: center;

  width: auto;
  gap: 8px;
  transition: transform .25s;
  &:hover,
  &:focus{
    transform: scale(1.05);
   
  }
`;
export const SwitcherLabel = styled.label`
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${p => p.theme.color.accent};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const Switcher = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
 
  &:checked + ${SwitcherLabel} {
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
export const SwitcherText = styled.div`
  height: auto;
  width: auto
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.m};
  color: ${p => p.theme.color.text}; ;
`;
