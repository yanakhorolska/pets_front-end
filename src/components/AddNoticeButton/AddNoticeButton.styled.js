import styled from 'styled-components';

const AddNoticeStyled = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${p => p.theme.color.accent};
  border: 0;
  border-radius: 50%;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: transform 250ms ease-out;
`;

export { AddNoticeStyled };
