import styled from 'styled-components';

export const friendsCard = styled.div`
  background: #ffffff;
  width: 280px;
  height: 192px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;transition: transform .25s;

  @media ${p => p.theme.media.tablet} {
    width: 336px;
    height: 246px;
    border-radius: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 394.5px;
    height: 287px;
  }
`;

export const authCard = styled.div`
  background: #ffffff;
  padding: 60px 80px 40px;
  width: 608px;
  height: auto;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  @media ${p => p.theme.media.desktop} {
    width: 618px;
    height: auto;
    padding: 60px 80px;
  }
`;
