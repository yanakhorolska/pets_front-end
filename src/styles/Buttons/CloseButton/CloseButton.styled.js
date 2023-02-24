import styled from 'styled-components';
import Icon from '../icons/index';

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;

  background: #fdf7f2;
  border-radius: 50%;
  cursor: pointer;
  color: #000;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #f59256;
    opacity: 1;
  }

  @media ${p => p.theme.media.tabletDesktop} {
    width: 44px;
    height: 44px;
  }
`;

export const IconClose = styled(Icon.Close)`
  width: 15px;
  height: 15px;

  @media ${p => p.theme.media.tabletDesktop} {
    width: 20px;
    height: 20px;
  }
`;
