import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Logo = styled(NavLink)`
    font-family: 'Poppins';
    font-size: 28px;
    text-decoration: none; 
    font-weight: 700;
   
    line-height: 0.66;
    letter-spacing: 0.07em;
    color:#111111;
   
    @media (min-width:768px){
        font-size: 32px;
    }
    @media (min-width:1280px){
        margin-right: 80px;
        
    }
`;