import { useGetNewsQuery } from 'redux/newsSlice';

export const NewsPage = () => {
  const { data, error, isLoading } = useGetNewsQuery('bulbasaur');

  if (!data) {
    return null;
  }

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.articles.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default NewsPage;
