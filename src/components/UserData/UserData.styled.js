import styled from 'styled-components';

export const MainUserPageBox = styled.div`
  margin-top: 60px;
  width: 100%;
  @media ${p => p.theme.media.tabletDesktop} {
    margin-top: 90px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
     margin-top: 60px;
  }
`;

export const UserDataBox = styled.div`
  background: ${p => p.theme.color.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  margin-top: 18px;
  margin-bottom: 40px;
  padding: 20px 12px 20px 16px;
  @media ${p => p.theme.media.tabletDesktop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px 24px 32px;
`;

export const UserDataItemsBox = styled.div`
display: flex;
flex-direction: column;
width: 380px;
`
