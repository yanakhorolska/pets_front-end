import styled from 'styled-components';

export const AvatarInput = styled("input")`
opacity: 0;
  visibility: hidden;
  position: absolute;
`
export const AvatarLabel = styled("label")`
color: ${p => p.theme.color.navBarText};
font-size: 12px;

  align-items: center;
  margin-top: 12px;
  margin-bottom: 36px;
  padding: 0;
  cursor: pointer;
 
`
export const AvatarImage = styled("img")`
border-radius: 50%;
`
