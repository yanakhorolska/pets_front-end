import { List, Link } from './nav.styled';

import { ToggleButton } from 'components/ToggleButton/ToggleButton';
const Nav = () => {
  return (
    <List>
      <Link to="/news">News</Link>
      <Link to="/notices">Find pet</Link>
      <Link to="/friends">Our friends</Link>
      <ToggleButton />
    </List>
  );
};
export default Nav;
