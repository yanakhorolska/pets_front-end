import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NoticesSearch = () => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleInput = event => {
    const newQuery = event.target.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      alert(`Type something to search.`);
      return;
    }
    setSearchParams({ search: query });
  };

  const handleResetQuery = () => {
    setQuery('');
    setSearchParams({ search: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="findpet"
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleInput}
        />
        <button type="submit"></button>
        {query !== '' && (
          <button type="submit" onClick={handleResetQuery}></button>
        )}
      </form>
    </>
  );
};

export default NoticesSearch;
