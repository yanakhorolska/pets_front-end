import styled from 'styled-components';
import { CloseButton } from 'styles/Buttons/index';

export const ModalBox = styled.div`
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};

  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};

  padding: 60px 20px 40px 20px;
  width: 300px;
  overflow-y: scroll;
  max-height: 100%;

  background: ${p => p.theme.color.cards};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};

  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};

  @media ${p => p.theme.media.tabletDesktop} {
    overflow: hidden;
    width: ${p => p.theme.sizes.width.modalM2};
    padding: 32px 20px;
    border-radius: ${p => p.theme.radii.borderRadius.btn};
  }
`;

export const CloseButtonTop = styled(CloseButton)`
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.space.p.xs};
  right: ${p => p.theme.space.p.xs};
  width: 34px;
  height: 34px;

  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }

  @media ${p => p.theme.media.desktop} {
    top: ${p => p.theme.space.m.xxs};
  }
`;

export const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  object-fit: contain;

  @media ${p => p.theme.media.tabletDesktop} {
    width: 288px;
    height: 328px;
  }
`;

export const Category = styled.div`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.textAlign.center};
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.space.p.xs};
  left: 0;
  padding-left: ${p => p.theme.space.p.xs};
  width: 158px;
  height: 28px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);

  border-radius: 0px 20px 20px 0px;

  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  letter-spacing: 0.04em;

  color: ${p => p.theme.color.text};
`;

export const PhotoBox = styled.div`
  position: ${p => p.theme.position.r};
  @media ${p => p.theme.media.tabletMin} {
    margin-bottom: ${p => p.theme.space.m.xs};
  }
`;

export const ColumnBox = styled.div`
  @media ${p => p.theme.media.tabletDesktop} {
    display: ${p => p.theme.display.flex};
    gap: ${p => p.theme.space.p.xs};
    margin-bottom: ${p => p.theme.space.m.s};
  }
`;

export const Descriptions = styled.ul`
  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};

  gap: 8px;
  margin-bottom: ${p => p.theme.space.m.s};
`;

export const TitleCard = styled.p`
  /* display: block; */
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.s};
  letter-spacing: -0.01em;

  color: ${p => p.theme.color.text};

  @media ${p => p.theme.media.tabletDesktop} {
    width: 400px;
    font-size: 28px;
  }
`;

export const DescriptionItems = styled.p`
  display: ${p => p.theme.display.flex};
`;

export const DescriptionLink = styled('a')`
  display: ${p => p.theme.display.flex};
  transition: transform 0.25s;
  &:hover,
  &:focus {
    color: ${p => p.theme.color.accent};
  }
`;

export const DescrCategory = styled.span`
  display: block;
  width: 100px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.s};
  color: ${p => p.theme.color.text};
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const DescrData = styled.span`
  display: block;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.36;
  color: ${p => p.theme.color.text};
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.color.hoverBtn};
  }

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const ButtonBox = styled.ul`
  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};
  gap: ${p => p.theme.space.m.xxs};
  margin-top: ${p => p.theme.space.m.l};

  @media ${p => p.theme.media.tabletDesktop} {
    flex-direction: row-reverse;
    margin-top: 32px;
  }
`;

export const ContactButton = styled.button`
  display: ${p => p.theme.display.flex};
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  background: #f59256;
  border-radius: 40px;
  border: 2px solid #f59256;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.m};

  transition: color, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${p => p.theme.color.text};

  &:hover {
    border: 2px solid #ff6101;
  }

  @media ${p => p.theme.media.tabletDesktop} {
    width: 160px;
  }
`;

export const AddButton = styled.button`
  display: ${p => p.theme.display.flex};
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  background: #ffffff;
  border-radius: 40px;
  border: 2px solid #f59256;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.default};
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.04em;

  transition: color, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: #111111;

  &:hover {
    border: 2px solid #ff6101;
  }

  @media ${p => p.theme.media.tabletDesktop} {
    width: 160px;
  }
`;

export const CommentBox = styled.div`
  width: 240px;
  overflow-wrap: break-word;

  @media ${p => p.theme.media.tabletDesktop} {
    width: 660px;
  }
`;
