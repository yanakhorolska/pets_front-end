import { EditBtn, EditIcon } from "./EditButton.styled";
import "./EditButton.css";

export const EditButton = ({onClick }) => {
  return (
    <EditBtn onClick={onClick}>
      <EditIcon />
    </EditBtn>
  );
};

