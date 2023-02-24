import styled from 'styled-components';

export const AvatarInput = styled("input")`
opacity: 0;
  visibility: hidden;
  position: absolute;
`
export const AvatarBox = styled.div`
// display: flex;
margin-bottom: 36px;
@media ${p => p.theme.media.tabletDesktop}{
  margin-bottom: 0;
}
`

export const AvatarLabel = styled("label")`
color: ${p => p.theme.color.navBarText};
font-size: ${p => p.theme.fontSizes.xs};
  display: flex;
  width: 86px;
  align-items: center;
  margin-top: 12px;
  margin-left: auto;
  padding: 0;
  cursor: pointer;
  
 
`
export const AvatarLabelText = styled.span`
margin-left: 4px;
`

export const AvatarImage = styled("img")`
border-radius: 50%;
margin-bottom: 12px;
width: 233px;
height: 233px;

`
