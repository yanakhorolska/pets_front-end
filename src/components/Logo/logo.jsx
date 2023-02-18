import { Logo } from './logo.styled';

export const Logos = props => {
  const { children, ...otherProps } = props;

  if (!Object.keys(otherProps).includes('variant')) {
    otherProps.variant = 'contained';
  }
  return (
    <Logo {...otherProps}>
      pe<span style={{ color: '#F59256' }}>t</span>ly
    </Logo>
  );
};
