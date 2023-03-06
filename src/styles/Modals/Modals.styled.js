import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index:4;

  position: ${p => p.theme.position.f};
  top: ${p => p.theme.sizes.top.zero};
  left: ${p => p.theme.sizes.left.zero};
  // width: ${p => p.theme.sizes.width.max};
  // height: ${p => p.theme.sizes.height.max};
  width: 100vw;
  height : 100vh;
  background: rgba(17, 17, 17, 0.6);
  opacity: ${p => p.theme.opacity.one};
  transition: ${p => p.theme.transition.backdrop};
  backdrop-filter: ${p => p.theme.backdropFilter.blur};
`;

export const Modal = styled.div`
   z-index:6;

  padding: ${p => p.theme.space.p.m} ${p => p.theme.space.p.xs};
  background-color: ${p => p.theme.color.white};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  width: ${p => p.theme.sizes.width.modalS};
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};
  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};
  height: ${p => p.theme.sizes.height.auto};
  @media (min-width: 768px) {
    width: ${p => p.theme.sizes.width.modalM};
    padding: 40px 80px;
  }
`;
export const ModalLearnMore = styled.div`
  padding: 60px 20px 40px;
  background-color: ${p => p.theme.color.white};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  width: ${p => p.theme.sizes.width.modalS};
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};
  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};
  height: auto;
  @media (min-width: 768px) {
    width: ${p => p.theme.sizes.width.modalM2};
    padding: ${p => p.theme.space.p.m} ${p => p.theme.space.p.s} 2
      ${p => p.theme.space.p.m} ${p => p.theme.space.p.xs};
  }
`;
