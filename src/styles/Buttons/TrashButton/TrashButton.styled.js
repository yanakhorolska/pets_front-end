import styled from 'styled-components';

export const TrashBtn = styled.button`
  /* width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;

  background: #fdf7f2;
  border-radius: 50%;
  cursor: pointer;
  color: rgba(17, 17, 17, 0.6);

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #f59256;
    opacity: 1;
  } */

  padding: 8px 79px;
  background: ${p => p.theme.color.secondatyBtnText};
  border: 2px solid ${p => p.theme.color.accent};
  border-radius: 40px;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${p => p.theme.color.accent};

  &:hover {
    color: ${p => p.theme.color.hoverBtn};
    border: 2px solid ${p => p.theme.color.hoverBtn};
  }
`;
