import React, { useEffect, useState } from 'react';
import { RoundLink } from 'components/AuthNav/authNav.styled';
import Icon from 'styles/Buttons/icons/index';
import { getUserAvatarURL } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { UserAvatar } from './UserNav.styled';
import { useTranslation } from 'react-i18next';

const UserNav = click => {
  const avatarURL = useSelector(getUserAvatarURL);
  const [avatar, setAvatar] = useState(avatarURL);
  const { t } = useTranslation();
  useEffect(() => {
    setAvatar(avatarURL);
  }, [avatarURL]);

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
      onClick={click}
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
