import * as React from 'react';
import Logotype from 'components/Logo/logo';
import { Head, List, Link } from './header.styled';
import { useAuth } from 'hooks/useAuth';
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Head>
      <Logotype />
      <List>
        <Link to="/news">News</Link>
        <Link to="/notices">Find pet</Link>
        <Link to="/friends">Our friends</Link>
      </List>
      <>
        {isLoggedIn ? (
          <Link to="/user">Account</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registration</Link>
          </>
        )}
      </>
    </Head>
  );
};

export default Header;
