import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RoundLink = styled(NavLink)`
  background-color: ${p => p.theme.color.buttonOW};
  padding: 8px 28px;
  font-weight: 500;
  border-radius: 40px;
  color: ${p => p.theme.color.text};
  border: 2px solid ${p => p.theme.color.accent};
  letter-spacing: 0.04em;
  font-size: 14px;
  line-height: 0.74;
   height:35px;
  display: flex;
  // vertical-align: middle;
  align-items: center;
  transition: transform 250ms ease-out;
  &:hover,
  &:focus{
    transform: scale(1.05);   
  }
  &:first-of-type {
    margin-right: 12px;
  }
 
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 0.72;
    height: 44px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 0.74;
    height: 47px;
  }
`;

export const AuthBox = styled.div`
display: flex;
align-items: center;
`