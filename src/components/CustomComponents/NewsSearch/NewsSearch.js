import { useState } from 'react';
import SearchInput from 'styles/Inputs/SearchInput/SearchInput';

export const SearchField = ({ onSearch }) => {
  const [inputUsed, setInputUsed] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = e => {
    onSearch(e.target.value);
    if (e.target.value !== '') {
      setInputUsed(true);
    }
    if (e.target.value === '') {
      setInputUsed(false);
    }
    setValue(e.target.value);
  };
  const handleClear = e => {
    e.preventDefault();
    setInputUsed(false);
    onSearch('');
    setValue('');
  };
  return (
    <SearchInput
      value={value}
      type="text"
      name="search"
      placeholder="Search"
      onChange={handleChange}
      inputUsed={inputUsed}
      onClick={handleClear}
    />
  );
};
