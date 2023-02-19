import styled from 'styled-components';

export const LoginError = styled.p`
  height: 20px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: #f59256;
  letter-spacing: 0.04em;
  padding: 5px 15px;
`;

export const LoginErrorLast = styled.p`
  height: 20px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: #f59256;
  letter-spacing: 0.04em;
  padding: 5px 15px;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  padding: 9px 14px 10px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    padding: 13px 32px 12px;
  }
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  font-family: 'Manrope Medium';
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  padding-top: 6px;
  padding-bottom: 5px;
  margin-bottom: 40px;
  background-color: #f59256;
  color: #fff;
`;
