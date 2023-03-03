import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeStyled, HomeImg, HomeText, BoxHome } from './home.styled';
import { Container } from 'styles/Container/Container.styled';

const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeStyled>
      <Container>
        <BoxHome>
          <HomeText>{t('titleMain')}</HomeText>
          <HomeImg/>
        </BoxHome>
      </Container>
    </HomeStyled>
  );
};

export default Home;
