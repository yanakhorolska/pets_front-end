import styled from "styled-components";

export const NextBtn = styled.button`
  width: 180px;
  height: 44px;
  padding: 8px 55px;
  background: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  transition: color, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: #ffffff;

  &:hover {
    color: #ffffff;
    border: 2px solid #ff6101;
  }
`;
