import { useState } from 'react';
import SearchInput from 'styles/Inputs/SearchInput/SearchInput';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useTranslation } from 'react-i18next';
Notify.init({ warning: { background: '#F59256' } });
export const SearchField = ({ onSearch }) => {
  const { t } = useTranslation();
  const [inputUsed, setInputUsed] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = e => {
    const searchQuery = e.target.value.trim();
    if (e.target.value === ' ') {
      Notify.warning('Incorrect search');
    }
    if (searchQuery.length >= 60) {
      Notify.warning('Incorrect search');
    }
    onSearch(searchQuery);
    if (e.target.value !== '') {
      setInputUsed(true);
    }
    if (e.target.value === '') {
      setInputUsed(false);
    }
    setValue(e.target.value);
  };
  const handleClear = e => {
    if (value === '') {
      Notify.warning('Please start type search query');
      return;
    }
    e.preventDefault();
    setInputUsed(false);
    onSearch('');
    setValue('');
  };
  return (
    <SearchInput
      maxLength={10}
      value={value}
      type="text"
      name="search"
      placeholder={t('search')}
      onChange={handleChange}
      inputUsed={inputUsed}
      onClick={handleClear}
    />
  );
};
