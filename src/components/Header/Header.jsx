import * as React from 'react';
import Logotype from 'components/Logo/logo';

import { Head, HeadNav } from './header.styled';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Head>
      <HeadNav>
        <Logotype />
        <Nav />
      </HeadNav>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Head>
  );
};

export default Header;
