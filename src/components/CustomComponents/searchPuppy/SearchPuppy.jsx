import {
  SearchPuppyImg,
  SearchPuppyText,
  SearchPuppyWrap,
} from './SearchPuppyStyled';
import { useTranslation } from 'react-i18next';
export const SearchPuppy = () => {
  const { t } = useTranslation();
  return (
    <SearchPuppyWrap>
      <div>
        <SearchPuppyText>{t('noNews')}</SearchPuppyText>
      </div>
      <SearchPuppyImg />
    </SearchPuppyWrap>
  );
};
