import styled from 'styled-components';

export const Button = styled.button`
  width: ${p => p.theme.sizes.width.icon};
  height: ${p => p.theme.sizes.height.icon};
  background: ${p => p.theme.color.none};
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space.p.zero};
  border-radius: ${p => p.theme.radii.borderRadius.half};
  cursor: pointer;
  & > svg {
    inline-size: 100%;
    block-size: 100%;
  }
`;
