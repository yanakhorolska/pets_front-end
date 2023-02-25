import styled from 'styled-components';

export const Title = styled.p`
 font-size: 20px;
 width: 280px;
 
 @media ${p => p.theme.media.tabletDesktop}{
    font-size: 28px;
 }
`