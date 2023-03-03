import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, SearchInput, Button } from './NoticesSearch.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Icon from '../../styles/Buttons/icons/index';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const NoticesSearch = () => {
  const { t } = useTranslation();
  const [hasClose, setHasClose] = useState(false);
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (query === '') {
      setSearchParams({});
      setHasClose(false);
      return;
    }
    setSearchParams({ search: query });
  }, [query, setSearchParams]);

  const handleInput = event => {
    setHasClose(true);
    const newQuery = event.target.value.toLowerCase().trim();
    setQuery(newQuery);

    setSearchParams({ search: query });
  };

  const onClick = () => {
    setHasClose(false);
    setSearchParams({});
    setQuery('');
  };
  const onClickSearch = () => {
    if (query === '') {
      Notify.warning('Please start type search query');
    }
  };

  return (
    <>
      <Box>
        <SearchInput
          name="findpet"
          type="text"
          value={query}
          placeholder={t('search')}
          onChange={handleInput}
        />
        {!hasClose ? (
          <Button type="submit" onClick={onClickSearch}>
            <Icon.Search
              style={{
                position: 'absolute',
                top: 10,
                right: 20,
              }}
            />
          </Button>
        ) : (
          <Button type="submit" onClick={onClick}>
            <Icon.ResetQuery
              style={{
                position: 'absolute',
                top: 5,
                right: 18,
                borderRadius: '50%',
                height: '32px',
              }}
            />
          </Button>
        )}
      </Box>
    </>
  );
};

export default NoticesSearch;
