import styled from 'styled-components';

export const NewsWrap = styled.div`
  padding-top: 42px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;

export const NewsBtn = styled.button`
transition: transform .25s;
  &:hover,
  &:focus{   
     transform: scale(1.05);
  }
  @media (min-width: 768px) {
    width: 248px;
    height: 38px;
    padding: 8px 79px;
  }
  width: 124px;
  height: 28px;
  padding: 4px 40px;
  background: ${p => p.theme.color.white};
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.m};
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${p => p.theme.color.accent};
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
  align-items: center;
  justify-content: center;
  gap: 64px;
`;
