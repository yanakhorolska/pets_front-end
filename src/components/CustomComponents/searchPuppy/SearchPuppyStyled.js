import styled from 'styled-components';
import puppy from '../../../images/bgs/puppy.png';
export const SearchPuppyWrap = styled.div`
  gap: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;
export const SearchPuppyText = styled.div`
  width: 170px;
  height: 80px
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.s};
  color: ${p => p.theme.color.newsText};
`;
export const SearchPuppyImg = styled.div`
  background-image: url(${puppy});
  height: 80px;
  width: 80px;
  background-repeat: no-repeat;
  background-size: contain;
`;
