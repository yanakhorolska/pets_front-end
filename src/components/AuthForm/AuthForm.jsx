import { Link, useLocation } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  AuthContainer,
  AuthTitle,
  AuthQuestion,
  AuthLink,
} from './AuthFormStyled';

const AuthForm = ({ title }) => {
  const { pathname } = useLocation();

  return (
    <AuthContainer>
      <AuthTitle>{title}</AuthTitle>
      {pathname === '/login' && <LoginForm />}
      {pathname === '/register' && <RegisterForm />}
      <AuthQuestion>
          {pathname === '/register'
            ? 'Already have an account?'
            : "Don't have an account?"}
          &nbsp;
      </AuthQuestion>
      <AuthLink>
        <Link to={pathname === '/register' ? '/login' : '/register'}>
          {pathname === '/register' ? 'Login' : 'Register'}
        </Link>
      </AuthLink>
    </AuthContainer>
  );
};

export default AuthForm;
