import styled from 'styled-components';

export const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: white;
  fill: #f59256;
  stroke: #f59256;

  width: 100%;
  &:hover,
  :focus {
    color: white;
    background-color: #f59256;
  }
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 20px;
    width: 180px;
    padding-top: 6.5px;
    padding-bottom: 6.5px;
  }
`;

export const ModalStyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  padding-top: 9px;
  padding-bottom: 9px;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background-color: #f59256;
  color: white;
  fill: #f59256;
  stroke: #f59256;
  width: 100%;
  @media ${p => p.theme.media.tabletDesktop} {
    font-size: 20px;
    width: 180px;
    padding-top: 8.5px;
    padding-bottom: 8.5px;
  }
`;
