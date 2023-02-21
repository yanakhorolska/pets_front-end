import { useSelector, useDispatch } from 'react-redux';
import { getToken, getUser } from '../../redux/selectors';
import { useGetUserQuery } from '../../redux/authApi';
// import{useLogOutMutation} from '../../redux/fetchUser'
import { setUser } from '../../redux/authSlice';
import { useEffect } from 'react';
import UserData from 'components/UserData/UserData';
import LogoutButton from "components/LogoutButton/LogoutButton"
// import {PetsData} from "components/PetsData/"

const UserPage = () => {
  const token = useSelector(getToken);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserQuery(token);

  const user = { ...data };

  useEffect(() => {
    if (!isLoading) {
      dispatch(setUser(user));
    }
  });
  const currentUser = useSelector(getUser);
  console.log('CurrentUser', currentUser);

    return (
    <div>
      <UserData />
      <LogoutButton />
      {/* <PetsData /> */}
    </div>
  );
};

export default UserPage;
