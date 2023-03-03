import styled from 'styled-components';

export const FriendsItem = styled.li`
  min-height: 200px;
  width: 80%;
  text-align: center;
  padding: 15px;
  background-color: ${p => p.theme.color.cards};
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  flex-wrap: wrap;
  @media (min-width: 768px) {
    border-radius: 40px;
    width: calc(40%);
  }
  @media (min-width: 1280px) {
    height: 100%;
    width: 100%;
  } ;
`;

export const ItemTitle = styled('a')`
  display: inline-block;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 700;
  color: ${p => p.theme.color.accent};
  &:hover {
    color: ${p => p.theme.color.hoverBtn};
  }
  &:focus {
    color: ${p => p.theme.color.hoverBtn};
  }
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.38;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  } ;
`;

export const FriendsItemBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const FriendsImgBox = styled.div`
  width: 158px;
`;

export const FriendsImage = styled.img`
  border-radius: 20px;
  display: block;
  max-width: 100%;
  width: 100%;
`;

export const ContactsList = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: start;
  margin-left: 10px;
  gap: 5px;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  word-break: break-all;
  width: 55%;
  font-size: 12px;
  line-height: 1.33;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const ContactsWrap = styled.span`
  display: block;
  font-weight: 600;
`;

export const ContactsLink = styled('a')`
  display: block;
  word-wrap: break-word;
  word-break: keep-all;
  color: inherit;
  &:hover,
  &:focus: {
    color: ${p => p.theme.color.accent};
  }
  &:hover ~ ${ContactsWrap}:first-child {
    color: ${p => p.theme.color.accent};
  }

  &:focus {
    color: ${p => p.theme.color.accent};
  }
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;
`;

export const NoInfo = styled.span`
  color: ${p => p.theme.color.text};
`;

export const Wrap = styled.div`
  &:hover span {
    color: ${p => p.theme.color.accent};
  }
`;
