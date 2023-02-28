import { useLocation } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  AuthContainer,
  AuthTitle,
  AuthQuestion,
  AuthLink,
} from './AuthFormStyled';
import { useTranslation } from 'react-i18next';

const AuthForm = ({ title }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <AuthContainer>
      <AuthTitle>{title}</AuthTitle>
      {pathname === '/login' && <LoginForm />}
      {pathname === '/register' && <RegisterForm />}
      <AuthQuestion>
        {pathname === '/register' ? t('alreadyQuestion') : t('dontQuestion')}
        &nbsp;
      </AuthQuestion>
      <AuthLink to={pathname === '/register' ? '/login' : '/register'}>
        {pathname === '/register' ? t('login') : t('register')}
      </AuthLink>
    </AuthContainer>
  );
};

export default AuthForm;
