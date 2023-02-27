import AuthForm from 'components/AuthForm/AuthForm';
import { AuthContainer } from './LoginPage.styled';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <AuthContainer>
      <AuthForm title={t('login')} />
    </AuthContainer>
  );
};

export default LoginPage;
