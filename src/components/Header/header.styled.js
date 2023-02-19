import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const Head = styled.header`
    display: flex;
    flex-diracion:row;
    padding: 20px 0;
    align-items: center;
`;
export const List = styled.nav`   
    display: flex;
    flex-diracion:row;  
`;
export const Link = styled(NavLink)`
    font-family: 'Manrope', sans-serif;
    margin-right: 80px;
    text-decoration: none; 
    font-weight: 500;
    font-size: 20px;
    line-height: 0.74;
    letter-spacing: 0.04em;
    color:#111111;
    cursor: pointer;
    &.active {
    text-decoration-line: underline;
    color: #F59256;
    }
`;