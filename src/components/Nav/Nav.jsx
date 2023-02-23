import { List, Link } from './nav.styled';

const Nav = () => {
  return (
    <List>
      <Link to="/news">News</Link>
      <Link to="/notices">Find pet</Link>
      <Link to="/friends">Our friends</Link>
    </List>
  );
};
export default Nav;
