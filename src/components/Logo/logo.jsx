import { Logo, LogoAccent } from './logo.styled';

const Logotype = click => {
  return (
    <Logo to="/" onClick={click}>
      pe<LogoAccent>t</LogoAccent>ly
    </Logo>
  );
};

export default Logotype;
