import { HomeStyled, HomeImg, HomeText, BoxHome } from './home.styled';
import { Container } from 'styles/Container/Container.styled';

const Home = () => {
  return (
    <HomeStyled>
      <Container>
        <BoxHome>
          <HomeText>Take good care of your small pets</HomeText>
          <HomeImg />
        </BoxHome>
      </Container>
    </HomeStyled>
  );
};

export default Home;
