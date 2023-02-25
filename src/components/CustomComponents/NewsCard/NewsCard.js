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
export const NewsCard = ({ title, description, date, url }) => {
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
          Read more
        </NewsLink>
      </NewsInfoWrap>
    </NewsItem>
  );
};
