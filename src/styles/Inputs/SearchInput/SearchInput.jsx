import { SearchInputStyled, Box, Button } from './SearchInput.styled';
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
      <Button type="submit">
        <Icon.Search style={{ position: 'absolute', top: 10, right: 20 }} />
      </Button>
    </Box>
  );
};

export default SearchInput;
