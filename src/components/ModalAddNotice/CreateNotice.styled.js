import styled from 'styled-components';

const ModalCreateNotice = styled.form`
  display: flex;
  flex-direction: column;
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

const FormTitle = styled.h3`
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 10px;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 26px;
  color: ${p => p.theme.color.black};
`;

const StyledStar = styled.span`
  color: ${p => p.theme.color.accent};

  font-size: ${p => p.theme.fontSizes.l};
`;

const RadioGroupSex = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioSex = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p =>
    p.children[1].props.checked ? p.theme.color.accent : p.theme.color.black};
`;

export {
  //
  FormTitle,
  ModalCreateNotice,
  RadioLabel,
  RadioSex,
  RadioGroupSex,
  FormPageWrapper,
  StyledStar,
  InputLabel,
};
