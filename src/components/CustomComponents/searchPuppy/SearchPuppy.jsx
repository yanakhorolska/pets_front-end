import {
  SearchPuppyImg,
  SearchPuppyText,
  SearchPuppyWrap,
} from './SearchPuppyStyled';
export const SearchPuppy = () => {
  return (
    <SearchPuppyWrap>
      <div>
        <SearchPuppyText>We couldn't find anything</SearchPuppyText>
      </div>
      <SearchPuppyImg />
    </SearchPuppyWrap>
  );
};
