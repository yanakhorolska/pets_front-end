import React from 'react';
import { RoundLink } from 'components/AuthNav/authNav.styled';
import Icon from 'styles/Buttons/icons/index';
import { getUserAvatarURL } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { UserAvatar } from './UserNav.styled';
import { useTranslation } from 'react-i18next';

const UserNav = () => {
  const avatar = useSelector(getUserAvatarURL);
  const { t } = useTranslation();

  return (
    <RoundLink
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        background: '#F59256',
        marginRight: '0',
      }}
      to="/user"
    >
      {avatar ? (
        <UserAvatar src={avatar} alt="avatar" />
      ) : (
        <Icon.Account style={{ marginRight: '12px' }} />
      )}
      {t('account')}
    </RoundLink>
  );
};

export default UserNav;
