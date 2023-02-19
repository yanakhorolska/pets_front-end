import * as React from 'react';
import Logotype from 'components/Logo/logo';
import { Head, List, Link } from './header.styled';

const Header = () => {
  return (
    <Head>
      <Logotype />
      <List>
        <Link to="/news">News</Link>
        <Link to="/notices">Find pet</Link>
        <Link to="/friends">Our friends</Link>
      </List>
    </Head>
  );
};

export default Header;
