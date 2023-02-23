import styled from 'styled-components';

export const Container = styled('div')`
  margin: ${p => p.theme.space.m.auto};
  padding-left: ${p => p.theme.space.p.xs};
  padding-right: ${p => p.theme.space.p.xs};
  @media ${p => p.theme.media.mobileMax} {
    max-width: ${p => p.theme.sizes.width.mediaS};
  }
  @media ${p => p.theme.media.mobileMin} {
    width: 100%;
  }
  @media ${p => p.theme.media.tabletDesktop} {
    width: 100%;
    padding-left: ${p => p.theme.space.p.s};
    padding-right: ${p => p.theme.space.p.s};
  }
  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.sizes.width.mediaL};
    padding-left: ${p => p.theme.space.p.xxs};
    padding-right: ${p => p.theme.space.p.xxs};
  } ;
`;
