import { EditBtn } from '../EditButton/EditButton.styled';
import Icon from '../icons/index';

export const CheckButton = () => {
  return (
    <EditBtn type="submit">
      <Icon.CheckMark />
    </EditBtn>
  );
};
