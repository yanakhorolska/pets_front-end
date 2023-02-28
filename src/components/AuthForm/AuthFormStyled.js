import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
  width: 280px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  @media (min-width: 768px) {
    width: 608px;
    top: calc((100vh - 490px) / 2);
    background-color: ${p => p.theme.color.cards};
    box-shadow: ${p => p.theme.shadows.boxShadow};
    border-radius: 40px;
    padding: 60px 80px;
  }

  @media (min-width: 1280px) {
    width: 618px;
  }
`;

export const AuthTitle = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;

  letter-spacing: 0.04em;
  color: ${p => p.theme.color.text};
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const AuthQuestion = styled.p`
  display: inline-block;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${p => p.theme.color.greyTransp};
`;

export const AuthLink = styled(Link)`
  display: inline-block;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: ${p => p.theme.color.textRegister};
  transition: transform .25s;
  &:hover,
  &:focus{   
     transform: scale(1.05);
  }
`;

export const AuthError = styled.p`
  height: 20px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: ${p => p.theme.color.accent};
  letter-spacing: 0.04em;
  padding: 5px 15px;
`;

export const AuthErrorLast = styled.p`
  height: 20px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: ${p => p.theme.color.accent};
  letter-spacing: 0.04em;
  padding: 5px 15px;
  margin-bottom: 20px;
`;

export const AuthInput = styled.input`
  color: ${p => p.theme.color.text};
  width: 100%;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background-color: ${p => p.theme.color.background};
  border: 1px solid ${p => p.theme.color.white};
  border-radius: 40px;
  outline: none;
  padding: 9px 14px 10px;
  transition: transform .25s;
  &:hover,
  &:focus{   
     transform: scale(1.05);
  }
  &:placeholder-shown {
    color: ${p => p.theme.color.greyTransp};
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    padding: 13px 32px 12px;
  }
`;

export const AuthButton = styled.button`
  display: block;
  width: 100%;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  border-radius: 40px;
  cursor: pointer;

  padding-top: 10px;
  padding-bottom: 10px;

  background-color: ${props =>
    props.accent ? props.theme.color.accent : props.theme.color.white};
  color: ${props =>
    props.accent ? props.theme.color.white : props.theme.color.black};
  border: ${props =>
    props.accent ? 'none' : `2px solid ${props.theme.color.accent}`};
  margin-bottom: ${props => (props.last ? '40px' : '16px')};
  transition: transform .25s;
  &:hover,
  &:focus{   
     transform: scale(1.05);
  }
`;
