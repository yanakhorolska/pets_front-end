import * as React from 'react';
import { useState } from 'react';
import Logotype from 'components/Logo/logo';
import { Link } from 'components/Nav/nav.styled';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
import {
  Head,
  HeadNav,
  BurgerMenu,
  BurgerLinks,
  ToggleButtonBurg,
  MenuHeader,
  ButtonsContainer,
  HeaderWrap,
  BurgerLinksWrap,
} from './header.styled';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import Icon from 'styles/Buttons/icons/index';
import { useAuth } from 'hooks/useAuth';

const Header = () => {
  const [burg, setBurg] = useState(false);
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Head>
        <HeadNav>
          <Logotype />
          <Nav />
        </HeadNav>
        <HeaderWrap>
          <ButtonsContainer>
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </ButtonsContainer>
          <ToggleButtonBurg onClick={() => setBurg(!burg)}>
            <Icon.Burger />
          </ToggleButtonBurg>
        </HeaderWrap>
      </Head>
      {burg ? (
        <BurgerMenu>
          <MenuHeader>
            <Logotype />
            <ToggleButtonBurg onClick={() => setBurg(!burg)}>
              <Icon.Close />
            </ToggleButtonBurg>
          </MenuHeader>
          <BurgerLinks>
            <BurgerLinksWrap>
              {isLoggedIn ? <UserNav /> : <AuthNav />}
            </BurgerLinksWrap>
            <Link to="/news">News</Link>
            <Link to="/notices">Find pet</Link>
            <Link to="/friends">Our friends</Link>
            <ToggleButton />
          </BurgerLinks>
        </BurgerMenu>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
