import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
  list-style-type: none;
padding-top: 40px;
  @media (min-width: 768px) {
        justify-content: space-evenly
    gap: 32px;
    max-width: 100%;
  }
  @media (min-width: 1280px) {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
