import AuthForm from 'components/AuthForm/AuthForm';
import { AuthContainer } from "./styledLoginPage.styled"

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthForm title="Login" />
    </AuthContainer>
  );
};

export default LoginPage;


