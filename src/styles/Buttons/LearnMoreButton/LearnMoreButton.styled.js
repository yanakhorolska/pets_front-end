import styled from 'styled-components';

export const LearnMoreBtn = styled.button`
  width: 248px;
  height: 38px;
  padding: 8px 79px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: #f59256;

  &:hover {
    color: #ff6101;
    border: 2px solid #ff6101;
  }
`;
