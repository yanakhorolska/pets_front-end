import styled from 'styled-components';

export const NewsItem = styled.li`
  width: 280px;
  text-align: left;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  } ;
`;
export const NewsLine = styled.div`
  @media (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media (min-width: 1280px) {
    width: 340px;
  }
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
`;
export const NewsTitle = styled.h3`
  height: 105px;
  overflow: hidden;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.s};
  margin-bottom: 16px;
`;
export const NewsTextWrap = styled.div`
  height: 110px;
  overflow: hidden;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const NewsText = styled.span`
  height: 200px;
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.s};
  color: ${p => p.theme.color.newsText};
`;

export const NewsDate = styled.span`
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.s};
  color: ${p => p.theme.color.newsDate};
`;
export const NewsLink = styled.a`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.s};
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
