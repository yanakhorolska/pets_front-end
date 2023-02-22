import AuthForm from 'components/AuthForm/AuthForm';
import { AuthContainer } from "./LoginPage.styled"

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthForm title="Login" />
    </AuthContainer>
  );
};

export default LoginPage;


