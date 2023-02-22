import { ModalBtn, ModalStyledBtn } from './ModalButton.styled';

export const ModalButton = props => {
  const { children, ...otherProps } = props;
  return <ModalBtn {...otherProps}>{children}</ModalBtn>;
};

export const ModalStyledButton = props => {
  const { children, ...otherProps } = props;
  return <ModalStyledBtn {...otherProps}>{children}</ModalStyledBtn>;
};
