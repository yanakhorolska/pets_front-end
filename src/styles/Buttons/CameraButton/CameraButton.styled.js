import styled from "styled-components";

export const CameraBtn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 36px;
  padding: 0;
  border: 0;
  background: #ffffff;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`