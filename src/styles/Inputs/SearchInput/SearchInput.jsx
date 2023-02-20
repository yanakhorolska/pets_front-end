import { SearchInputStyled, Box } from './SearchInput.styled';
import Icon from '../../Buttons/icons/index';

const SearchInput = ({ name, type, value, placeholder, onChange }) => {
  return (
    <Box>
      <SearchInputStyled
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Icon.Search style={{ position: 'absolute', top: 8, right: 15 }} />
    </Box>
  );
};

export default SearchInput;
