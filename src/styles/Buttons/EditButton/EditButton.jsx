import { EditBtn } from './EditButton.styled';
import Icon from '../icons/index';

export const EditButton = ({ onClick }) => {
  return (
    <EditBtn onClick={onClick} type="button">
      <Icon.Edit />
    </EditBtn>
  );
};
