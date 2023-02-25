import {
  SearchPuppyImg,
  SearchPuppyText,
  SearchPuppyWrap,
} from './SearchPuppyStyled';
export const SearchPuppy = () => {
  return (
    <SearchPuppyWrap>
      <div>
        <SearchPuppyText>No news found</SearchPuppyText>
      </div>
      <SearchPuppyImg />
    </SearchPuppyWrap>
  );
};
