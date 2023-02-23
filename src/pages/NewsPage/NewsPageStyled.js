import styled from 'styled-components';

export const NewsWrap = styled.div`
  padding-top: 42px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 88px;
  }
  @media (min-width: 1280px) {
    padding-top: 61px;
  } ;
`;

export const NewsBtn = styled.button`
  width: 248px;
  height: 38px;
  padding: 8px 79px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: #f59256;
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
    color: #ff6101;
    border: 2px solid #ff6101;
  }
`}

  ${({ disabled }) =>
    disabled &&
    `color: rgba(17, 17, 17, 0.6);
    border: 2px solid rgba(17, 17, 17, 0.6);
    
  `}
`;
export const NewsButtonsWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
