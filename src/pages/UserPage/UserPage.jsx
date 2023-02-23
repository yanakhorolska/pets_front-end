import UserData from 'components/UserData/UserData';
import LogoutButton from "components/LogoutButton/LogoutButton"
import  PetsData from "components/PetsData/PetsData"


const UserPage = () => {

    return (
    <div>
      <UserData />
      <LogoutButton />
      <PetsData />
    </div>
  );
};

export default UserPage;