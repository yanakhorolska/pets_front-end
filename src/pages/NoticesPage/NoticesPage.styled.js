import styled from 'styled-components';

export const NoticesBox = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;
export const NavBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ListBox = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 32px;
  padding-top: 30px;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 57px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 60px;
  }
`;
