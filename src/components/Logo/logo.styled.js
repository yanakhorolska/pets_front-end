import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  font-family: 'Poppins';
  font-size: 28px;
  text-decoration: none;
  font-weight: 700;

  line-height: 0.66;
  letter-spacing: 0.07em;
  color: ${p => p.theme.color.text};
  transition: transform .25s;
  &:hover,
  &:focus{
    transform: scale(1.05);
   // color: ${p => p.theme.color.accent};
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    margin-right: 80px;
  }
`;
export const LogoAccent = styled('span')`
  color: ${p => p.theme.color.accent};
`;
