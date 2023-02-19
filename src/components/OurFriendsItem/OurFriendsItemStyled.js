import styled from 'styled-components';
import { theme } from '../../styles/theme/theme';

export const FriendsItem = styled.li`
  min-height: 200px;
  width: 80%;
  text-align: center;
  padding: 15px;
  background-color: ${theme.color.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
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

export const ItemTitle = styled.a`
  display: inline-block;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 700;
  color: ${theme.color.accent};
  &:hover {
    color: ${theme.color.hoverBtn};
  }
  &:focus {
    color: ${theme.color.hoverBtn};
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

export const ContactsWrap = styled.div`
  display: block;
  font-weight: 600;
`;

export const ContactsLink = styled.a`
  color: inherit;
  &:hover {
    color: ${theme.color.accent};
  }
  &:focus {
    color: ${theme.color.accent};
  }
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;
`;

export const NoInfo = styled.span`
  color: ${theme.color.greyText};
`;
