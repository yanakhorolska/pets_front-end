import styled from 'styled-components';

const ModalCreateNotice = styled.div`
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
export { ModalCreateNotice };
