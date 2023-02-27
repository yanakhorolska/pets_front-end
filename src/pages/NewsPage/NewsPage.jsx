import { useGetNewsQuery } from 'redux/newsSlice';
import { SearchField } from 'components/CustomComponents/NewsSearch/NewsSearch';
import { NewsBoard } from 'components/CustomComponents/NewsBoard/NewsBoard';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NewsWrap, NewsBtn, NewsButtonsWrap } from './NewsPageStyled';
import { Container } from 'styles/Container/Container.styled';
import { FirstHeader } from '../../styles/Headers/Headers.styled';
import { Loader } from 'components/Loader/Loader';
import { SearchPuppy } from 'components/CustomComponents/searchPuppy/SearchPuppy';
const NewsPage = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetNewsQuery({ query, page });
  const newsStart = useRef(null);
  const searchNews = query => {
    setQuery(query);
    setPage(1);
  };
  const scrollToTop = () => {
    newsStart.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container>
      <NewsWrap>
        <FirstHeader>{t('titleNews')}</FirstHeader>
        <div ref={newsStart} />
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
                onClick={() => {
                  setPage(page => page - 1);
                  scrollToTop();
                }}
                disabled={page === 1}
              >
                {t('prev')}
              </NewsBtn>
              <NewsBtn
                onClick={() => {
                  setPage(page => page + 1);
                  scrollToTop();
                }}
                disabled={page * 6 >= data.total}
              >
                {t('next')}
              </NewsBtn>
            </NewsButtonsWrap>
          </>
        ) : (
          <SearchPuppy></SearchPuppy>
        )}
      </NewsWrap>
    </Container>
  );
};
export default NewsPage;
