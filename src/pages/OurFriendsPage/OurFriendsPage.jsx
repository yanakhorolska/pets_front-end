import { OurFriendsList } from "../../components/OurFriensList/OurFriendsList"
import {Container} from "../../styles/Container/Container.styled"
import { FirstHeader } from "../../styles/Headers/Headers.styled"
import { FriendsTitleWrap} from "../../components/OurFriendsWrap/OurFriendsWrapStyled"
const OurFriendsPage = () => {
  return (
    <section>
      <Container>
        <FriendsTitleWrap>
          <FirstHeader>Our Friends</FirstHeader>
        </FriendsTitleWrap>
        
          <OurFriendsList />
      </Container>
    </section>
  );
};

export default OurFriendsPage;
