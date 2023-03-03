import styled from 'styled-components';
//import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const List = styled('nav')`
  display: ${p => p.display ? p.display : "none"};
  align-items: center;
  flex-direction: column;

  @media (${p => p.theme.media.desktop}) {
    display: flex;
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  font-family: 'Manrope', sans-serif;
  margin-bottom: 40px;
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 0.74;
  letter-spacing: 0.04em;
  color: ${p => p.theme.color.text};
  cursor: pointer;
  transition: transform .25s;
  &:first-of-type {
    margin-top: 46px;
  }
  &:hover,
  &:focus{
    transform: scale(1.05);
    color: ${p => p.theme.color.accent};
  }
  &.active {
    text-decoration-line: underline;
    color: ${p => p.theme.color.accent};
  }
  @media (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 60px;
    font-weight: 500;
    &:first-of-type {
      margin-top: 88px;
    }
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 0.74;
    margin-right: 80px;
    margin-bottom: 0px;
    &:first-of-type {
      margin-top: 0px;
    }
  }
`;
