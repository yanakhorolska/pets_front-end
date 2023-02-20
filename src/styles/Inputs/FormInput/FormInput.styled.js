import styled from 'styled-components';

export const FormInputStyled = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding: 14px 12px;
  width: 280px;
  height: 40px;
  background: #fdf7f2;

  font-family: 'Manrope';
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);

  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  cursor: pointer;

  @media ${p => p.theme.media.tabletDesktop} {
    width: 448px;
    height: 52px;
    padding: 14px 32px;
    font-size: 18px;
    line-height: 1.38;
  }
`;
