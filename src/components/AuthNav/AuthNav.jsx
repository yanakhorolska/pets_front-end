import * as React from 'react';

import { RoundLink } from './authNav.styled';
const AuthNav = () => {
  return (
    <div>
      <RoundLink style={{ color: '#FFFFFF' }} to="/login">
        Login
      </RoundLink>
      <RoundLink style={{ background: '#FFFFFF' }} to="/register">
        Registration
      </RoundLink>
    </div>
  );
};
export default AuthNav;
