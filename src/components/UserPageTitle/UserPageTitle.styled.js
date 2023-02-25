import styled from 'styled-components';

export const Title = styled.p`
 font-size: 20px;
 height: 40px;
line-height: ${p =>p.theme.lineHeights.s};
 @media ${p => p.theme.media.tabletDesktop}{
  font-size: 28px;
}
 
`