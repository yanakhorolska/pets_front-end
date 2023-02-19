import styled from "styled-components";

export const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 240px;
  height: 40px;
  padding: 9px 41px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: #000;
  fill: #f59256;
  stroke: #f59256;
`;
