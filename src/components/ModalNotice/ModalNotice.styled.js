import styled from 'styled-components';

export const ModalBox = styled.div`
  position: ${p => p.theme.position.a};
  top: ${p => p.theme.sizes.top.half};
  left: ${p => p.theme.sizes.left.half};

  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};

  padding: 60px 20px 40px 20px;
  width: ${p => p.theme.sizes.width.modalS};

  background: #ffffff;
  border-radius: ${p => p.theme.radii.borderRadius.inputModal};

  transform: ${p => p.theme.transform.modal};
  transition: ${p => p.theme.transition.modal};

  @media ${p => p.theme.media.tabletDesktop} {
    width: ${p => p.theme.sizes.width.modalM2};
    padding: 32px 20px;
    border-radius: ${p => p.theme.radii.borderRadius.btn};
  }
`;

export const CloseButton = styled.button`
  position: 'absolute';
  top: 23px;
  right: 23px;

  width: 34px;
  height: 34px;
`;

// ${p => p.theme};

export const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  border: 1px solid tomato;
  object-fit: contain;

  @media ${p => p.theme.media.tabletDesktop} {
    width: 288px;
    height: 328px;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 0;
  padding-left: 20px;
  width: 158px;
  height: 28px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);

  border: 1px solid tomato;
  border-radius: 0px 20px 20px 0px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  color: #111111;
`;

export const PhotoBox = styled.div`
  position: relative;
  @media ${p => p.theme.media.tabletMin} {
    margin-bottom: 16px;
  }
`;

export const ColumnBox = styled.div`
  @media ${p => p.theme.media.tabletDesktop} {
    display: flex;
    gap: 20px;
    margin-bottom: 28px;
  }
`;

export const Descriptions = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
  margin-bottom: 28px;
`;

export const TitleCard = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: #000000;

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 28px;
  }
`;

export const DescriptionItems = styled.p`
  display: flex;
`;

export const DescriptionLink = styled.a`
  display: flex;
`;

export const DescrCategory = styled.span`
  display: block;
  width: 90px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.36;
  color: ${p => p.theme.color.text};

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const DescrData = styled.span`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${p => p.theme.color.text};

  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const ButtonBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
  list-style: none;

  @media ${p => p.theme.media.tabletDesktop} {
    flex-direction: row-reverse;
    margin-top: 32px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
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
  font-weight: 500;
  font-size: 16px;

  transition: color, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: #ffffff;

  &:hover {
    border: 2px solid #ff6101;
  }

  @media ${p => p.theme.media.tabletDesktop} {
    width: 160px;
  }
`;

export const AddButton = styled.button`
  display: flex;
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
  font-weight: 500;
  font-size: 16px;
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
