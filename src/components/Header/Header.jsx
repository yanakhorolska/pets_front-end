import * as React from 'react';
import { useState } from 'react';
import Logotype from 'components/Logo/logo';
import { Container } from 'styles/Container/Container.styled';
import { ToggleButton } from 'components/ToggleButton/ToggleButton';
import {
  Head,
  BurgerMenu,
  BurgerLinks,
  ToggleButtonBurg,
  MenuHeader,
  ButtonsContainer,
  HeaderWrap,
  BurgerLinksWrap,
  HeadNav,
} from './header.styled';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import Icon from 'styles/Buttons/icons/index';
import { useAuth } from 'hooks/useAuth';
import { LangSwitcher } from 'components/CustomComponents/Switcher/Switcher';

const Header = () => {  
  const [burg, setBurg] = useState(false);
  const isLoggedIn = useAuth();

  const handleClick = event => {
    setBurg(!burg);
    event.stopPropagation();
  };

  return (
    <>
      <Head>
        <HeadNav>
          <Logotype />
          <Nav />
        </HeadNav>

        <ToggleButton />
        <LangSwitcher />
        <HeaderWrap>
          <ButtonsContainer>
            {isLoggedIn ? <UserNav/>:<AuthNav />}
          </ButtonsContainer>
          <ToggleButtonBurg onClick={handleClick}>
            <Icon.Burger />
          </ToggleButtonBurg>
        </HeaderWrap>
      </Head>
      {burg ? (
        <BurgerMenu onClick={handleClick}>
          <Container>
            <MenuHeader>
              <Logotype to="/" />
              <ToggleButtonBurg>
                <Icon.FatClose />
              </ToggleButtonBurg>
            </MenuHeader>

            <BurgerLinks>
              <BurgerLinksWrap>
                {isLoggedIn ? (
                  <UserNav/>
                ) : (
                  <AuthNav/>
                )}
              </BurgerLinksWrap>
              <HeadNav>
                <Nav display={"flex"}/>
              </HeadNav>
            </BurgerLinks>
          </Container>
        </BurgerMenu>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
