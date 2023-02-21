import { useLogOutMutation } from '../../redux/fetchUser'
import {setLogoutUser} from '../../redux/authSlice'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

function LogoutButton() {
    const token = useSelector(getToken)
    const [logout, { isLoading }] = useLogOutMutation(token);
    const dispatch = useDispatch()

  const handleLogoutClick = () => {
      logout(token);
      dispatch(setLogoutUser())
      
  };

  return (
    <button onClick={handleLogoutClick} disabled={isLoading}>
      Logout
    </button>
  );
}

export default LogoutButton