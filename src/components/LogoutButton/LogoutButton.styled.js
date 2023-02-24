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
`
export const ButtonText = styled.span`
margin-left: 4px;

color: ${p => p.theme.color.greyTransp}
`