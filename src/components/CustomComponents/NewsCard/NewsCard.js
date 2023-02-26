import {
  NewsItem,
  NewsTitle,
  NewsLine,
  NewsDate,
  NewsLink,
  NewsText,
  NewsInfoWrap,
  NewsTextWrap,
} from './NewsCardStyled';
import { useTranslation } from 'react-i18next';

export const NewsCard = ({ title, description, date, url }) => {
  const { t } = useTranslation();
  return (
    <NewsItem>
      <NewsLine />
      <NewsTitle>{title}</NewsTitle>
      <NewsTextWrap>
        <NewsText>{description}</NewsText>
      </NewsTextWrap>
      <NewsInfoWrap>
        <NewsDate>{date}</NewsDate>
        <NewsLink href={url} target="_blank">
          {t('readMore')}
        </NewsLink>
      </NewsInfoWrap>
    </NewsItem>
  );
};
