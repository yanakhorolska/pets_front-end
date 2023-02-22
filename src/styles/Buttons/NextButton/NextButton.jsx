import { NextBtn } from './NextButton.styled';

export const NextButton = props => {
  const { children, ...otherProps } = props;
  return <NextBtn {...otherProps}>{children}</NextBtn>;
};
