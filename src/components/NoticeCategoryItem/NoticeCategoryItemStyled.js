import styled from 'styled-components';

export const NoticeItem = styled.li`
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  box-shadow: rgb(49 21 4 / 7%) 7px 4px 14px;
  background: ${p => p.theme.color.white};
  @media (max-width: 767px) {
    max-width: 280px;
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media (max-width: 1279) {
    width: 336px;
  }
`;

export const NoticeImg = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  height: 288px;
  width: 100%;
`;

export const NoticeInfoBox = styled.div`
  padding: 20px 16px 32px;
`;

export const NoticeInfoList = styled.ul`
  padding-left: 4px;
`;

export const NoticeInfoListItem = styled.li`
  margin-bottom: 8px;
`;

export const NoticeInfoListItemCategory = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.color.text};
  margin-right: 40px;
`;

export const NoticeInfoListItemData = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.color.text};
`;

export const CategoryTag = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 6px 0px 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;
