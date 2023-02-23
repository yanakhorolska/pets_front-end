import { useGetNewsQuery } from 'redux/newsSlice';
import { SearchField } from 'components/CustomComponents/NewsSearch/NewsSearch';
import { NewsBoard } from 'components/CustomComponents/NewsBoard/NewsBoard';
import { useState } from 'react';
import { NewsWrap, NewsBtn, NewsButtonsWrap } from './NewsPageStyled';
import { Container } from 'styles/Container/Container.styled';
import { FirstHeader } from '../../styles/Headers/Headers.styled';
import { Loader } from 'components/Loader/Loader';

const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetNewsQuery({ query, page });

  function searchNews(query) {
    setQuery(query);
    setPage(1);
  }

  return (
    <Container>
      <NewsWrap>
        <FirstHeader>News</FirstHeader>
        <SearchField onSearch={searchNews} />
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <Loader />
        ) : Array.isArray(data.data) ? (
          <>
            <NewsBoard newsData={data.data} />
            <NewsButtonsWrap>
              <NewsBtn
                onClick={() => setPage(page => page - 1)}
                disabled={page === 1}
              >
                Prev
              </NewsBtn>
              <NewsBtn
                onClick={() => setPage(page => page + 1)}
                disabled={page * 6 >= data.total}
              >
                Next
              </NewsBtn>
            </NewsButtonsWrap>
          </>
        ) : (
          <>No news found</>
        )}
      </NewsWrap>
    </Container>
  );
};
export default NewsPage;
