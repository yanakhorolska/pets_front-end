import{useLogOutMutation} from '../../redux/fetchUser'

import React from 'react'
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

function LogoutButton() {
    const token = useSelector(getToken)
    const [logout, { isLoading }] = useLogOutMutation(token);

  const handleLogoutClick = () => {
    logout(token);
  };

  return (
    <button onClick={handleLogoutClick} disabled={isLoading}>
      Logout
    </button>
  );
}

export default LogoutButton