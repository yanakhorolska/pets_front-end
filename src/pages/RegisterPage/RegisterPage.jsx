import AuthForm from 'components/AuthForm/AuthForm';
import { AuthContainer } from '../LoginPage/LoginPage.styled';
import { useTranslation } from 'react-i18next';
const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <AuthContainer>
      <AuthForm title={t('registration')} />
    </AuthContainer>
  );
};

export default RegisterPage;
