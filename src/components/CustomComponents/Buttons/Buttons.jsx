import { StyledOrangeButton } from './Buttons.styled';

export const OrangeButton = props => {
  const { children, ...otherProps } = props;

  if (!Object.keys(otherProps).includes('variant')) {
    otherProps.variant = 'contained';
  }
  return <StyledOrangeButton {...otherProps}>{children}</StyledOrangeButton>;
};
