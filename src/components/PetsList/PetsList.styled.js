import styled from 'styled-components';

export const Box = styled.div`
  margin: 20px auto;
`;

export const PetBox = styled.div`
  margin: 20px auto;
  padding: 16px 20px 40px;
  width: 280px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;

export const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const PetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PetDescripton = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const Span = styled.span`
  margin-right: 5px;
  font-weight: 500;
`;
