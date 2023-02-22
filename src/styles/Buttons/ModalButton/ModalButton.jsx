import { ModalBtn } from './ModalButton.styled';

export const ModalButton = props => {
  const { children, ...otherProps } = props;
  return <ModalBtn {...otherProps}>{children}</ModalBtn>;
};
