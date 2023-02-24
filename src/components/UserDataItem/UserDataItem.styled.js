import styled from 'styled-components';
import { Form, Field } from 'formik';



export const UserDataForm = styled(Form)`
display: flex;
// justify-content: space-between;
align-items: baseline;
flex-direction: row;
padding: 0;
`
export const  UserDataLabel = styled.label`
font-size: 12px;
text-transform: capitalize;
width: 56px;
// margin-right: 8px;
@media ${p => p.theme.media.tabletDesktop}{
    font-size: 18px;
    lineHeights: ${p => p.theme.lineHeights.s}
}
`

export const UserDataInput = styled(Field)`
display: block;
width: 160px;
border-radius: 5px;
padding: 4px 18px;
margin-bottom: 8px;
margin-right: 8px;
background-color: ${p => p.theme.color.white};
border: none;
color: black;
font-weight: 400;
@media ${p => p.theme.media.tabletDesktop}{
    width: 216px;
    font-size: 18px;
    lineHeights: ${p => p.theme.lineHeights.s}
}



&:active{
background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
}

:-ms-input-placeholder {
     color: red;
  
}

`
