//import styled from "styled-components";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled("nav")`   
    display:none;

    @media (min-width: 1280px){
    display: flex;
    align-items:center;
    flex-diracion:row;         
    }
    
`;
export const Link = styled(NavLink)`
    
    font-family: 'Manrope', sans-serif;
    margin-bottom: 40px;
    text-decoration: none; 
    font-weight: 500;
    font-size: 32px;
    line-height: 0.74;
    letter-spacing: 0.04em;
    color:#111111;
    cursor: pointer;
     &:first-of-type{
        margin-top:46px;
    }
    &.active {
        text-decoration-line: underline;
        color: #F59256;
    }
    @media (min-width: 768px){
        font-size: 46px;
        margin-bottom: 60px;  
         &:first-of-type{
        margin-top:88px;
    }      
    }
     @media (min-width: 1280px){
         font-size: 20px;
         margin-right: 80px; 
         margin-bottom:0px;  
          &:first-of-type{
        margin-top:0px;
    }         
    }
`;
