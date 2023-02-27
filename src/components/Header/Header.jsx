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
  const { isLoggedIn } = useAuth();
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
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </ButtonsContainer>
          <ToggleButtonBurg onClick={() => setBurg(!burg)}>
            <Icon.Burger />
          </ToggleButtonBurg>
        </HeaderWrap>
      </Head>
      {burg ? (
        <BurgerMenu>
          <Container>
            <MenuHeader>
              <Logotype to="/" click={() => setBurg(false)} />
              <ToggleButtonBurg onClick={() => setBurg(!burg)}>
                <Icon.FatClose />
              </ToggleButtonBurg>
            </MenuHeader>

            <BurgerLinks>
              <BurgerLinksWrap>
                {isLoggedIn ? (
                  <UserNav click={() => setBurg(false)} />
                ) : (
                  <AuthNav click={() => setBurg(false)} />
                )}
              </BurgerLinksWrap>
              <Link to="/news" onClick={() => setBurg(!burg)}>
                {t('titleNews')}
              </Link>
              <Link to="/notices" onClick={() => setBurg(!burg)}>
                {t('noticesHeaderTitle')}
              </Link>
              <Link to="/friends" onClick={() => setBurg(!burg)}>
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
