import styled from 'styled-components';
import { CloseButton } from 'styles/Buttons';

const ModalAddPet = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space.p.m} ${p => p.theme.space.p.xs};
  background-color: ${p => p.theme.color.cards};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  width: ${p => p.theme.sizes.width.modalS};
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};
  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};
  height: ${p => p.theme.sizes.height.auto};

  overflow-y: scroll;

  @media ${p => p.theme.media.tabletDesktop} {
    width: ${p => p.theme.sizes.width.modalM};
    padding: ${p => p.theme.space.p.m} 107px;
  }

  *:focus {
    outline: none;
  }
`;

const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space.m.s};
  // gap: ${p => p.theme.space.p.xxs};

  @media ${p => p.theme.media.tabletDesktop} {
    margin-top: ${p => p.theme.space.m.l};
    // gap: ${p => p.theme.space.m.s};
  }
`;

const FormTitle = styled.h3`
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.default};
  line-height: 1;
  color: ${p => p.theme.color.text};

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
`;

const FormDescription = styled.h4`
  margin-top: ${p => p.theme.space.p.xs};
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1;
  text-align: center;
  color: ${p => p.theme.color.text};

  @media ${p => p.theme.media.tabletDesktop} {
    margin-top: ${p => p.theme.space.p.xs};
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.08;
  color: ${p => p.theme.color.text};

  @media ${p => p.theme.media.tabletDesktop} {
    font-weight: ${p => p.theme.fontWeights.l};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 81%;
  }
`;

const InputStyled = styled.input`
  padding: ${p => p.theme.space.m.xxs} ${p => p.theme.space.m.xs};
  margin-top: ${p => p.theme.space.m.xxs};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1;
  width: 100%;
  height: ${p => p.theme.fontSizes.xxl};
  background-color: ${p => p.theme.color.inputModal};
  border: ${p => p.theme.borders.inputBorder};
  border-radius: ${p => p.theme.radii.borderRadius.btn};

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.21;
  }
`;

// Image

const InputImageWrapper = styled.div`
  position: ${p => p.theme.position.r};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 4px;
  width: 208px;
  height: 208px;
  background-color: ${p => p.theme.color.inputModal};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  overflow: hidden;
  & > img {
    object-fit: contain;
  }

  @media ${p => p.theme.media.tabletDesktop} {
    width: 182px;
    height: 182px;
    margin-top: -${p => p.theme.space.p.xs};
  }
`;

const InputImageLabel = styled(InputLabel)`
  width: fit-content;
`;

const InputImage = styled.input`
  position: ${p => p.theme.position.a};
  opacity: 0;
  visibility: hidden;
`;

const CommentInput = styled(InputStyled)`
  height: 100px;
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};
  resize: none;

  @media ${p => p.theme.media.tabletDesktop} {
    height: 116px;
  }
`;

const FieldError = styled.p`
  padding-top: 2px;
  //${p => p.theme.space.p.xs};
  height: ${p => p.theme.space.p.xxs};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.color.accent};
  text-align: center;

  @media ${p => p.theme.media.tabletDesktop} {
    //padding-top : 4px;
    height: ${p => p.theme.space.m.s};
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: ${p => p.theme.space.m.xxs};
  margin-top: ${p => p.theme.space.m.s};

  @media ${p => p.theme.media.tabletDesktop} {
    margin: 0 auto;
    margin-top: ${p => p.theme.space.m.xxs};
    flex-direction: row;
    width: 380px;
  }
`;

const CloseFormButton = styled(CloseButton)`
  position: ${p => p.theme.position.a};
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;

  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }

  @media ${p => p.theme.media.desktop} {
    top: 24px;
    right: 24px;
  }
`;

export {
  ModalAddPet,
  FormPageWrapper,
  FormTitle,
  FormDescription,
  InputLabel,
  InputStyled,
  InputImageWrapper,
  InputImageLabel,
  InputImage,
  CommentInput,
  FieldError,
  ButtonsWrapper,
  CloseFormButton
};
