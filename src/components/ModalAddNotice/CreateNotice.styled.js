import styled from 'styled-components';
import { CloseButton } from 'styles/Buttons/index';
import Icon from './svg/index';

const ModalCreateNotice = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 18px 40px 18px;
  background-color: ${p => p.theme.color.white};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  width: ${p => p.theme.sizes.width.modalS};
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};
  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};
  max-height: ${p => p.theme.sizes.height.max};

  overflow-y: scroll;

  @media ${p => p.theme.media.tablet} {
    width: ${p => p.theme.sizes.width.modalM};
    padding: 40px 80px;
  }
  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.sizes.width.modalM};
    padding: 40px 80px;
  }
  *:focus {
    outline: none;
  }
`;

const FormTitle = styled.h3`
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.default};
  margin-bottom: 20px;

  @media ${p => p.theme.media.tabletDesktop} {
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: 36px;
  }
`;

const FormDescription = styled.h2`
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.35;

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 20px;
  }
`;

const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* gap: 3px; */

  @media ${p => p.theme.media.tabletDesktop} {
    /* gap: 5px; */
  }
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: 18px;
  line-height: 26px;
  color: ${p => p.theme.color.black};

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 24px;
  }
`;

const InputStyled = styled.input`
  padding: 10px 16px;
  margin-top: 8px;
  font-size: 14px;
  height: 40px;
  background: ${p => p.theme.color.inputModal};
  border: ${p => p.theme.borders.inputBorder};
  border-radius: ${p => p.theme.radii.borderRadius.btn};

  @media ${p => p.theme.media.tablet} {
    font-size: 16px;
    margin-top: 12px;
    height: 48px;
  }

  @media ${p => p.theme.media.desktop} {
    font-size: ${p => p.theme.fontSizes.m};
    margin-top: 12px;
    height: 48px;
  }
`;

const CommentInput = styled(InputStyled)`
  height: 40px;
  border-radius: 20px;
  resize: none;

  @media ${p => p.theme.media.tabletDesktop} {
    height: 110px;
  }
`;

const StyledStar = styled.span`
  color: ${p => p.theme.color.accent};
  font-size: ${p => p.theme.fontSizes.l};
`;

const RadioGroupSex = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 12px;

  @media ${p => p.theme.media.tabletDesktop} {
    gap: 80px;
  }
`;

const RadioSex = styled.input`
  display: none;
`;

const RadioSexLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p =>
    p.children[1].props.checked ? p.theme.color.accent : p.theme.color.black};

  @media ${p => p.theme.media.tabletDesktop} {
    margin-top: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media ${p => p.theme.media.tabletDesktop} {
    margin: 0 auto;
    flex-direction: row;
    width: 380px;
  }
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
  width: 116px;
  height: 116px;
  margin-top: 12px;
  border: ${p => p.theme.borders.inputBorder};
  background: ${p => p.theme.color.inputModal};
  border-radius: 20px;
  overflow: hidden;
  & > img {
    object-fit: contain;
  }

  @media ${p => p.theme.media.tabletDesktop} {
    width: 140px;
    height: 140px;
  }
`;

const StyledIconAdd = styled(Icon.Add)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FieldError = styled.p`
  height: 18px;
  font-size: 14px;
  color: ${p => p.theme.color.accent};
  margin-left: 15px;
  line-height: 18px;

  @media ${p => p.theme.media.tabletDesktop} {
    height: 20px;
    font-size: 16px;
  }
`;

const RadioGroupCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 15px;

  @media ${p => p.theme.media.tabletDesktop} {
    gap: 20px;
  }
`;

const RadioCaregory = styled.input`
  display: none;
`;

const RadioCaregoryLabel = styled.label`
  font-weight: ${p => p.theme.fontWeights.default};
  padding: 8px 28px;
  font-size: 14px;
  color: ${p =>
    p.children[0].props.checked ? p.theme.color.white : p.theme.color.black};
  background-color: ${p =>
    p.children[0].props.checked ? p.theme.color.accent : p.theme.color.white};
  border: ${p => p.theme.borders.buttonWhite};
  border-radius: ${p => p.theme.radii.borderRadius.half};

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 20px;
    padding: 10px 28px;
  }
`;

const CloseButtonAbsolute = styled(CloseButton)`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 34px;
  height: 34px;

  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
    top: 15px;
    right: 20px;
  }

  @media ${p => p.theme.media.desktop} {
    top: 25px;
    right: 40px;
  }
`;

export {
  FormTitle,
  ModalCreateNotice,
  RadioSexLabel,
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
  RadioGroupCategories,
  RadioCaregory,
  RadioCaregoryLabel,
  FormDescription,
  CloseButtonAbsolute,
};
