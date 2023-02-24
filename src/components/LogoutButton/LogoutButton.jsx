import { useLogOutMutation } from '../../redux/fetchUser'
import {setLogoutUser} from '../../redux/authSlice'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

import Icon from 'styles/Buttons/icons/index';
import { Button, ButtonText } from './LogoutButton.styled' 
// import {LogOut} from '../../styles/Buttons/icons/index'

function LogoutButton() {
    const token = useSelector(getToken)
    const [logout, { isLoading }] = useLogOutMutation(token);
    const dispatch = useDispatch()

  const handleLogoutClick = () => {
      logout(token);
      dispatch(setLogoutUser())
      
  };

  return (
    <Button onClick={handleLogoutClick} disabled={isLoading}>
      <Icon.LogOut /> 
      <ButtonText>Log Out</ButtonText>
    </Button>
  );
}

export default LogoutButton