import styled from "styled-components";

export const CalendarBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: ${p => p.theme.fontSizes.xxl};
  border-color: transparent;
  background: transparent;
  transform: translate(-50%, 50%);
  fill: ${p => p.theme.color.black};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, &:focus {
    fill: ${p => p.theme.color.accent}
  }
`