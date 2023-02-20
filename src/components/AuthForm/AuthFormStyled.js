import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 280px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  @media (min-width: 768px) {
    width: 608px;
    top: 114px;
    background-color: ${p => p.theme.color.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
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

export const AuthLink = styled('Link')`
  display: inline-block;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: ${p => p.theme.color.textRegister};
`;
