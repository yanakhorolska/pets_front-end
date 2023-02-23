import styled from 'styled-components';

export const NewsItem = styled.li`
  width: 80%;
  text-align: left;

  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: calc(40%);
  }
  @media (min-width: 1280px) {
    height: 100%;
    width: 100%;
  } ;
`;
export const NewsLine = styled.div`
  width: 340px;
  height: 8px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
`;
export const NewsTitle = styled.h2`
  height: 110px;
  overflow: hidden;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
`;
export const NewsTextWrap = styled.div`
  height: 110px;
  overflow: hidden;
  margin-bottom: 40px;
`;

export const NewsText = styled.span`
  height: 200px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;
`;

export const NewsDate = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
`;
export const NewsLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: underline;
  color: ${p => p.theme.color.accent};
  &:hover {
    color: ${p => p.theme.color.hoverBtn};
  }
  &:focus {
    color: ${p => p.theme.color.hoverBtn};
  }
`;
export const NewsInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
