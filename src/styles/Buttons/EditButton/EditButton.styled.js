import styled from "styled-components";

export const EditBtn = styled.button`
  margin: 0;
  border: 0;
  border-radius: 50%;
  width:20px;
  height: 20px;
  background: #fdf7f2;
  cursor: pointer;
  @media ${p => p.theme.media.tabletDesktop}{
  width: 32px;
  height: 32px;
}

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
    opacity: 1;
  }
`;
