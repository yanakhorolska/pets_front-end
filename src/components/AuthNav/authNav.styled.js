import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const RoundLink = styled(NavLink)`
    background-color: #F59256;
    padding: 8px 28px;
    
    border-radius: 40px;
    border: 2px solid #F59256;   
    letter-spacing: 0.04em;
    font-size: 14px;
    line-height: 0.73;
    &:first-of-type{
        margin-right:12px;
    }

   
`;