import * as React from 'react';
import { Link } from './authNav.styled';
const AuthNav = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Registration</Link>
    </div>
  );
};
export default AuthNav;
