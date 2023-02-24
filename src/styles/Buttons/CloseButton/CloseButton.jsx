import { CloseBtn, IconClose } from './CloseButton.styled';

export const CloseButton = ({ onClick, className }) => {
  return (
    <CloseBtn onClick={onClick} className={className}>
      <IconClose />
    </CloseBtn>
  );
};
