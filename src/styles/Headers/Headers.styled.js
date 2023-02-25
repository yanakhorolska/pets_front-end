import styled from 'styled-components';

export const FirstHeader = styled('h1')`
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: ${p => p.theme.textAlign.center};
  margin-bottom: ${p => p.theme.space.m.s};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.s};
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: ${p => p.theme.fontSizes.xxl};
    marginbottom: ${p => p.theme.space.m.l};
  }
`;

export const MainHeader = styled('h1')`
  color: ${p => p.theme.color.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.s};
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: ${p => p.theme.fontSizes.xxxl};
    line-height: ${p => p.theme.lineHeights.m};
  }
`;
