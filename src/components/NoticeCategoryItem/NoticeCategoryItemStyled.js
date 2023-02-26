import styled from 'styled-components';

export const StyledListTest = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // gap: 32px;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const NoticeItem = styled.li`
  background-color: ${p => p.theme.color.cards};
  border-radius: 0 0 20px 20px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  display: flex;
  flex-direction: column;
  //min-height: 565px;
  width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 336px;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: 288px;
    margin: 0;
  }
`;

export const ImgWrap = styled.div`
  height: 288px;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const NoticeImg = styled.img`
  display: block;
  height: 288px;
  object-fit: contain;
  width: 100%;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const CategoryTag = styled.p`
  border-radius: 0 40px 40px 0;
  color: ${p => p.theme.color.primaryText};

  font-size: 12px;
  height: 28px;
  letter-spacing: 0.04em;
  line-height: 1.25;
  top: 20px;
  width: 158px;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: hsla(0, 0%, 100%, 0.6);
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const HeartBtnWrap = styled.div`
  border-radius: 50%;
  height: 44px;
  right: 12px;
  top: 12px;
  width: 44px;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: hsla(0, 0%, 100%, 0.6);
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const NoticeInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 16px 32px;
  @media (min-width: 768px) {
    padding: 20px 20px 32px;
  }
`;

export const NoticeTitle = styled.h4`
  color: ${p => p.theme.color.text};
  font-size: 28px;
  letter-spacing: -0.01em;
  line-height: 1.36;
  margin-bottom: 20px;
  overflow-wrap: break-word;
`;

export const ListInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

export const NoticeInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;

export const NoticeInfoListItem = styled.li`
  word-wrap: break-word;
  display: flex;
  max-width: 296px;
`;

export const NoticeInfoListItemCategory = styled.p`
  color: ${p => p.theme.color.text};
  font-size: 16px;
  line-height: 1.38;
  width: 90px;
`;

export const NoticeInfoListItemData = styled.p`
  color: ${p => p.theme.color.text};
  font-size: 16px;
  line-height: 1.38;
  max-width: 155px;
  @media (min-width: 768px) {
    max-width: 205px;
  }

  @media (min-width: 1280px) {
    max-width: 160px;
  }
`;

export const LearnBtnWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SmallHeartBox = styled.div`
  border-radius: 50%;
  cursor: pointer;

  right: 26px;
  top: 26px;

  display: flex;
  position: absolute;

  transition: transform scale3d 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: rotate(-45deg) scale3d(1.1, 1.1, 1.1);
  }
`;
