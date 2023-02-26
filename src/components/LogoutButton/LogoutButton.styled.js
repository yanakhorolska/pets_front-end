import styled from 'styled-components';

export const Button = styled.button`
display: flex;
align-items: center;
margin-top: 44px;
margin-left: auto;
border: none;
background-color: transparent;
width: 90px;
height: 22px;
padding: 0;
cursor: pointer;
@media ${p => p.theme.media.tabletDesktop}{
    margin-left: 0;
}
`
export const ButtonText = styled.span`
margin-left: 4px;
font-weight: 500;
font-size: 16px;
letter-spacing: 0.04em;
// line-height: 22px;
color: ${p => p.theme.color.greyTransp}
`