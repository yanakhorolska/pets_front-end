import styled from 'styled-components';
// import { Form, Field } from 'formik';

export const UserDataItemBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  padding: 0;
  width: 100%;
  @media ${p => p.theme.media.tabletDesktop} {
    width: 378px;
  }
`;
export const UserDataLabel = styled.h3`
  color: ${p => p.theme.color.text};
  font-size: 12px;
  text-transform: capitalize;
  width: 56px;

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 18px;
    lineheights: ${p => p.theme.lineHeights.s};
  }
`;

export const UserDataPar = styled.input`
  display: block;
  width: 160px;
  border-radius: 5px;
  padding: 4px 18px;
  margin-bottom: 8px;
  margin-right: 8px;
  background-color: ${p => p.theme.color.white};
  border: none;
  color: black;
  font-weight: 400;
  @media ${p => p.theme.media.tabletDesktop} {
    width: 216px;
    font-size: 18px;
    lineheights: ${p => p.theme.lineHeights.s};
  }
`;

export const UserDataInput = styled.input`
  display: block;
  width: 160px;
  border-radius: 40px;
  padding: 4px 18px;
  margin-bottom: 8px;
  margin-right: 8px;
  outline: none;
  background-color: ${p => p.theme.color.white};
  border: none;
  color: black;
  font-weight: 400;
  @media ${p => p.theme.media.tabletDesktop} {
    width: 216px;
    font-size: 18px;
    lineheights: ${p => p.theme.lineHeights.s};
  }

  &:active {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }

  &:not(:disabled) {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }

  &::placeholder {
    color: ${p => p.theme.color.primaryText};
    font-size: 12px;
    opacity: 0.8;
  }
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 18px;
    lineheights: ${p => p.theme.lineHeights.s};
  }
`;
