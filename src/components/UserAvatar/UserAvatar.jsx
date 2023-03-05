import { useSelector } from 'react-redux';
import { getUserAvatarURL } from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
import {
  AvatarInput,
  AvatarLabel,
  AvatarImage,
  AvatarLabelText,
  AvatarBox,
} from './UserAvatar.styled';
import Icon from '../../styles/Buttons/icons';
import Emptyphoto from '../../images/bgs/EmptyPhoto.png';
import { useTranslation } from 'react-i18next';

const UserAvatar = () => {
  const { t } = useTranslation();
  const avatar = useSelector(getUserAvatarURL);
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const handleAvatarChange = async event => {
    try {
      const file = event.target.files[0];
      await updateUserAvatar(file).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AvatarBox>
      {avatar ? (
        <AvatarImage src={avatar} alt="User" />
      ) : (
        <AvatarImage src={Emptyphoto} />
      )}

      <AvatarLabel>
        <Icon.Camera style={{ marginLeft: "auto"}}/>
        <AvatarLabelText>{t('editPhoto')}</AvatarLabelText>
        <AvatarInput
          name="avatar"
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={e => handleAvatarChange(e)}
        />
      </AvatarLabel>
    </AvatarBox>
  );
};

export default UserAvatar;
