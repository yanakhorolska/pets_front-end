import { OurFriendsList } from "../../components/OurFriensList/OurFriendsList"
import {Container} from "../../styles/Container/Container.styled"
import {FirstHeader} from "../../styles/Headers/Headers.styled"
const OurFriendsPage = () => {
  return (
    <section>
      <Container>
        <FirstHeader>Our Friends</FirstHeader>
          <OurFriendsList />
      </Container>
    </section>
  );
};

export default OurFriendsPage;
