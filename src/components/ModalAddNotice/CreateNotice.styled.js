import styled from 'styled-components';

const ModalCreateNotice = styled.div`
  padding: 20px 20px 40px 20px;
  background-color: ${p => p.theme.color.white};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  width: ${p => p.theme.sizes.width.modalS};
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};
  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};
  height: ${p => p.theme.sizes.height.auto};
  @media ${p => p.theme.media.tablet} {
    width: ${p => p.theme.sizes.width.modalM};
    padding: 40px 80px;
  }
  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.sizes.width.modalM2};
    padding: 40px 80px;
  }
`;
export { ModalCreateNotice };
