import { useLogOutUserMutation } from '../../redux/fetchUser';
import { setLogoutUser } from '../../redux/authSlice';

import React from 'react';
import { useDispatch } from 'react-redux';

import Icon from 'styles/Buttons/icons/index';
import { Button, ButtonText } from './LogoutButton.styled';
// import {LogOut} from '../../styles/Buttons/icons/index'
import { useTranslation } from 'react-i18next';

function LogoutButton() {
  
  const [logout, { isLoading }] = useLogOutUserMutation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleLogoutClick = () => {
    // logout(token);
    dispatch(setLogoutUser());
  };

  return (
    <Button onClick={handleLogoutClick} disabled={isLoading}>
      <Icon.LogOut />
      <ButtonText>{t('logOut')}</ButtonText>
    </Button>
  );
}

export default LogoutButton;
