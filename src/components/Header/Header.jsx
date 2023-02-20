import * as React from 'react';
import Logotype from 'components/Logo/logo';

import { Head, HeadNav } from './header.styled';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Head>
      <HeadNav>
        <Logotype />
        <Nav />
        <ToggleButton />
      </HeadNav>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Head>
  );
};

export default Header;
