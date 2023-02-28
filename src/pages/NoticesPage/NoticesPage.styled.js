import styled from 'styled-components';

export const NoticesBox = styled.div`
  padding-bottom: 100px;
  padding-top: 42px;
  position: relative;
  @media (min-width: 768px) {
    padding-top: 88px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 60px;
  }
`;
export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: flex-start;
`;

export const ListBox = styled('section')`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 30px;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 57px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 60px;
  }
`;
