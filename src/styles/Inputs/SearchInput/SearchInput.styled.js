import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: scale 250ms linear;
`;

export const SearchInputStyled = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 9px 12px;
  padding-right: 40px;

  width: 280px;
  height: 40px;
  background: #ffffff;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;

  outline: none;
  border: none;
  color: #535353;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  cursor: pointer;

  @media ${p => p.theme.media.tabletDesktop} {
    width: 608px;
    height: 44px;
    border-radius: 40px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 28px auto;
  width: 280px;
  @media ${p => p.theme.media.tabletDesktop} {
    margin: 40px auto;
    width: 608px;
  }
`;
