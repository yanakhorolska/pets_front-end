import * as React from 'react';
import { RoundLink } from 'components/AuthNav/authNav.styled';
import Icon from 'styles/Buttons/icons/index';
const UserNav = click => {
  return (
    <RoundLink
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        marginRight: '0',
      }}
      to="/user"
      onClick={click}
    >
      <Icon.Account style={{ marginRight: '12px' }} />
      Account
    </RoundLink>
  );
};

export default UserNav;
