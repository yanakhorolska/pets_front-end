import { SearchInputStyled, Box, Button } from './SearchInput.styled';
import Icon from '../../Buttons/icons/index';

const SearchInput = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  onClick,
  inputUsed,
}) => {
  return (
    <Box>
      <SearchInputStyled
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {!inputUsed ? (
        <Button type="submit" onClick={onClick}>
          <Icon.Search style={{ position: 'absolute', top: 10, right: 20 }} />
        </Button>
      ) : (
        <Button type="submit" onClick={onClick}>
          <Icon.ResetQuery
            style={{ position: 'absolute', top: 10, right: 20 }}
          />
        </Button>
      )}
    </Box>
  );
};

export default SearchInput;
