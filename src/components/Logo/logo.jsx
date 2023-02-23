import { Logo } from './logo.styled';
import { Link } from 'react-router-dom';

const Logotype = () => {
  return (
    <Logo>
      <Link to="/">
        pe<span style={{ color: '#F59256' }}>t</span>ly
      </Link>
    </Logo>
  );
};

export default Logotype;
