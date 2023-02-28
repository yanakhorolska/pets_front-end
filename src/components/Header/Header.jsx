import * as React from 'react';
import { useState } from 'react';
import Logotype from 'components/Logo/logo';
import { Container } from 'styles/Container/Container.styled';
import { Link } from 'components/Nav/nav.styled';
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
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'components/CustomComponents/Switcher/Switcher';

const Header = () => {
  const { t } = useTranslation();
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
              <Logotype to="/" click={handleClick} />
              <ToggleButtonBurg onClick={handleClick}>
                <Icon.FatClose />
              </ToggleButtonBurg>
            </MenuHeader>

            <BurgerLinks>
              <BurgerLinksWrap>
                {isLoggedIn ? (
                  <div onClick={handleClick}>
                    <UserNav/>
                  </div>
                ) : (
                  <div onClick={handleClick}>
                    <AuthNav/>
                  </div>
                  
                )}
              </BurgerLinksWrap>
              <Link to="/news" onClick={handleClick}>
                {t('titleNews')}
              </Link>
              <Link to="/notices" onClick={handleClick}>
                {t('noticesHeaderTitle')}
              </Link>
              <Link to="/friends" onClick={handleClick}>
                {t('friendsTitle')}
              </Link>
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
