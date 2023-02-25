import * as React from 'react';

import { RoundLink } from './authNav.styled';
const AuthNav = click => {
  return (
    <div>
      <RoundLink
        onClick={click}
        style={{ color: '#FFFFFF', background: '#F59256' }}
        to="/login"
      >
        Login
      </RoundLink>
      <RoundLink onClick={click} to="/register">
        Registration
      </RoundLink>
    </div>
  );
};
export default AuthNav;
