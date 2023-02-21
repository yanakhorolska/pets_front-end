import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Anchor = styled(NavLink)`
  padding: 8px 28px;
  background-color: ${p => p.theme.color.white};
  border-radius: ${p => p.theme.radii.borderRadius.btn};
  border: ${p => p.theme.borders.buttonWhite};
  &:focus,
  :hover {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.white};
  }
  @media ${p => p.theme.media.tabletDesktop} {
    padding: 10px 28px;
  }
`;

export const AnchorLayout = styled.li`
  list-style: none;
  display: inline-block;
`;
