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
  *:focus {
    outline: none;
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
  gap: 28px;
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

const InputStyled = styled.input`
  padding: 10px 16px;
  font-size: ${p => p.theme.fontSizes.s};
  height: ${p => p.theme.fontSizes.xxl};
  background: ${p => p.theme.color.background};
  border: ${p => p.theme.borders.inputBorder};
  border-radius: ${p => p.theme.radii.borderRadius.btn};
`;

const CommentInput = styled(InputStyled)`
  height: 110px;
  border-radius: 20px;
  resize: none;
`;

const StyledStar = styled.span`
  color: ${p => p.theme.color.accent};
  font-size: ${p => p.theme.fontSizes.l};
`;

const RadioGroupSex = styled.div`
  display: flex;
  gap: 80px;
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

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 20px;
  width: 380px;
`;

const InputImageLabel = styled(InputLabel)`
  width: fit-content;
`;

const InputImage = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const InputImageWrapper = styled.div`
  display: flex;
  width: 140px;
  height: 140px;
  border: ${p => p.theme.borders.inputBorder};
  background: ${p => p.theme.color.background};
  border-radius: 20px;
  & > img {
    object-fit: contain;
  }
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
  InputStyled,
  CommentInput,
  ButtonsWrapper,
  InputImage,
  InputImageWrapper,
  InputImageLabel,
};
