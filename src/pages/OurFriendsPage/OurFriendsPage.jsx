import { OurFriendsList } from "../../components/OurFriensList/OurFriendsList"
import { FirstHeader } from "../../styles/Headers/Headers.styled"
import { FriendsWrap} from "./OurFriendsWrapStyled"
const OurFriendsPage = () => {
  return (
   
        <FriendsWrap>
          <FirstHeader>Our Friends</FirstHeader>
          <OurFriendsList />
        </FriendsWrap>
  );
};

export default OurFriendsPage;
