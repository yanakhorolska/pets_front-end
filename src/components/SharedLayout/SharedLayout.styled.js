import styled from 'styled-components';

export const Layout = styled('div')`
  background-color: ${p => p.theme.color.background};
  background-size: ${p => p.theme.backgroundSize.cover};
  background-repeat: ${p => p.theme.backgroundRepeat.no};
  min-height: ${p => p.theme.sizes.height.maxScreen};
  color: ${p => p.theme.color.text};
  font-weight: ${p => p.theme.fontWeights.default};
`;
