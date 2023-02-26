import styled from 'styled-components';

export const MainUserPageBox = styled.div`
  margin-top: 60px;
  margin-left:auto;
margin-right: auto;
  width: 100%;
  @media ${p => p.theme.media.tabletDesktop} {
    margin-top: 90px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
     margin-top: 60px;
     gap:32px; 
     align-items: flex-start;
  }
`;

export const DataBox = styled.div`
// 

`;

export const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
width: 280px;
margin-left: auto;
margin-right: auto;
@media ${p => p.theme.media.tabletDesktop}{
  width: 704px;
}
@media ${p => p.theme.media.desktop}{
width: 821px;
align-items: flex-end;
}
`

export const TitleWrapperData = styled.div`
width: 280px;
margin-left: auto;
margin-right: auto;
@media ${p => p.theme.media.tabletDesktop}{
  width: 704px;
}
@media ${p => p.theme.media.desktop}{
width: 410px;
}

`

export const UserDataBox = styled.div`
  background: ${p => p.theme.color.cards};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  border-radius: 20px;
  margin-top: 18px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 12px 20px 16px;
  width: 280px;
  @media ${p => p.theme.media.tabletDesktop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px 24px 32px;
     width: 704px;
    border-radius: 40px;
    @media ${p => p.theme.media.desktop}{
      flex-direction: column;
      width: 410px;
      margin-top: 24px;
  }

`;

export const UserDataItemsBox = styled.div`
display: flex;
flex-direction: column;


`
