import * as React from 'react';

import { RoundLink } from './authNav.styled';
const AuthNav = click => {
  return (
    <div>
      <RoundLink onClick={click} style={{ color: '#FFFFFF' }} to="/login">
        Login
      </RoundLink>
      <RoundLink
        onClick={click}
        style={{ background: '#FFFFFF' }}
        to="/register"
      >
        Registration
      </RoundLink>
    </div>
  );
};
export default AuthNav;
