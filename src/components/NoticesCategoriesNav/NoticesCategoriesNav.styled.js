import styled from 'styled-components';

export const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: 768px) {
  }
`;

export const LinksItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;
