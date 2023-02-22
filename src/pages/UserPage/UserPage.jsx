import { useSelector, useDispatch } from 'react-redux';
import { getToken} from '../../redux/selectors';
import { useGetUserQuery } from '../../redux/authApi';
// import {useGetCurrentUserQuery} from '../../redux/fetchUser'
// import{useLogOutMutation} from '../../redux/fetchUser'
import { setUser } from '../../redux/authSlice';
import { useEffect } from 'react';
import UserData from 'components/UserData/UserData';
import LogoutButton from "components/LogoutButton/LogoutButton"
// import {PetsData} from "components/PetsData/"

const UserPage = () => {
  const token = useSelector(getToken);
//  console.log(token)
  const dispatch = useDispatch();
  
  const { data, isLoading } = useGetUserQuery(token);
  

 const user = {...data, token}
console.log("data from back", user)
  useEffect(() => {
    if (!isLoading) {
      dispatch(setUser(user), []);
    }
  });
  // const currentUser = useSelector(getUser);
  // console.log('CurrentUser from userState', currentUser);

    return (
    <div>
      <UserData />
      <LogoutButton />
      {/* <PetsData /> */}
    </div>
  );
};

export default UserPage;