import { NewsCard } from '../NewsCard/NewsCard';
import { NewsBoardList } from './NewsBoardStyled';
export const NewsBoard = ({ newsData }) => {
  return (
    <NewsBoardList>
      {newsData.map(({ _id, title, description, date, url }) => (
        <NewsCard
          key={_id}
          title={title}
          description={description}
          date={date}
          url={url}
        ></NewsCard>
      ))}
    </NewsBoardList>
  );
};
