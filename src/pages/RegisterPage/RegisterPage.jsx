import AuthForm from 'components/AuthForm/AuthForm';
import { AuthContainer } from "../LoginPage/LoginPage.styled"

const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthForm title="Registration" />
    </AuthContainer>
  );
};

export default RegisterPage;
