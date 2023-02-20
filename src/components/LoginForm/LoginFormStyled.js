import styled from 'styled-components';

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
  width: 100%;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background-color: ${p => p.theme.color.background};
  border: 1px solid ${p => p.theme.color.white};
  border-radius: 40px;
  outline: none;
  padding: 9px 14px 10px;

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

  background-color: ${props => (props.accent ? '#f59256' : '#fff')};
  color: ${props => (props.accent ? '#fff' : '#000')};
  border: ${props => (props.accent ? 'none' : '2px solid #f59256')};
  margin-bottom: ${props => (props.last ? '40px' : '16px')};
`;
