import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { Container } from '../../styles/Container/Container.styled';
import { MainUserPageBox } from '../../components/UserData/UserData.styled';


const UserPage = () => {
  return (
    <Container>
      <MainUserPageBox>
        <UserData />
        <PetsData />
      </MainUserPageBox>
    </Container>
  );
};

export default UserPage;
