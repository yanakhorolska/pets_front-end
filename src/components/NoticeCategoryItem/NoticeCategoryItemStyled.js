import styled from 'styled-components';
export const StyledListTest = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const NoticeItem = styled.li`
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  box-shadow: 7px 4px 14px rgb(49 21 4 / 7%);
  display: flex;
  flex-direction: column;
  min-height: 565px;
  width: 280px;

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const ImgWrap = styled.div`
  height: 288px;
  position: relative;
  width: 280px;

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
  object-fit: cover;
  width: 280px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const CategoryTag = styled.p`
  border-radius: 0 40px 40px 0;
  color: #111;
  font-family: Manrope-Medium;
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
  color: #111;
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
  color: #111;
  font-size: 16px;
  line-height: 1.38;
  width: 90px;
`;

export const NoticeInfoListItemData = styled.p`
  color: #111;
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
`;
