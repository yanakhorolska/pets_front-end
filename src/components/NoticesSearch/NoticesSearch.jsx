import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchInput from 'styles/Inputs/SearchInput/SearchInput';

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
        <SearchInput
          name="findpet"
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleInput}
        />
        <button type="submit">Search</button>
        {query !== '' && (
          <button type="submit" onClick={handleResetQuery}>
            Clear query
          </button>
        )}
      </form>
    </>
  );
};

export default NoticesSearch;
