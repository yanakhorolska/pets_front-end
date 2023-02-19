import { ModalBtn } from "./ModalButton.styled";

export const ModalButton = ({ onClick, text}) => {
  return (
    <ModalBtn onClick={onClick}>
      {text}
    </ModalBtn>
  );
};


