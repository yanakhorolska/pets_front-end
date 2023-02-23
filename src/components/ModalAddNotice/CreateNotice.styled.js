import styled from 'styled-components';
import Icon from './svg/index';

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
  gap: 20px;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 26px;
  color: ${p => p.theme.color.black};
`;

const InputStyled = styled.input`
  padding: 10px 16px;
  margin-top: 12px;
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
  margin-bottom: 12px;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  margin-top: 12px;
  border: ${p => p.theme.borders.inputBorder};
  background: ${p => p.theme.color.background};
  border-radius: 20px;
  overflow: hidden;
  & > img {
    object-fit: contain;
  }
`;

const StyledIconAdd = styled(Icon.Add).attrs(props => ({
  opacity: props.isvisible === 'true' ? 1 : 0,
}))`
  opacity: ${p => p.opacity};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FieldError = styled.p`
  height: 20px;
  font-size: 10px;
  color: ${p => p.theme.color.accent};
  margin-left: 15px;
`;

export {
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
  StyledIconAdd,
  FieldError,
};
