import { Container } from 'styles/Container/Container.styled';
import { OurFriendsList } from '../../components/OurFriensList/OurFriendsList';
import { FirstHeader } from '../../styles/Headers/Headers.styled';
import { FriendsWrap } from './OurFriendsWrapStyled';
const OurFriendsPage = () => {
  return (
    <Container>
      <FriendsWrap>
        <FirstHeader>Our Friends</FirstHeader>
        <OurFriendsList />
      </FriendsWrap>
    </Container>
  );
};

export default OurFriendsPage;
