import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarURL} from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
// import { useDispatch } from 'react-redux';
// import { setAvatarUrl } from '../../redux/authSlice';

const UserAvatar = () => {
  const avatarURL = useSelector(getUserAvatarURL);
  console.log(avatarURL)
  // const dispatch = useDispatch();
  const [updateAvatar] = useUpdateUserAvatarMutation();

  

  function handleAvatarChange(event) {
    const file = event.target.files[0];
const newAvatarUrl = updateAvatar(file).unwrap()
  console.log("NEW", newAvatarUrl)
   
  
      
    
  
    
  }

  return (
    <div>
      <img src={avatarURL} alt="user" />

      <div>
        <label htmlFor="avatar-upload">Upload Avatar</label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
      </div>
    </div>
    
  );
};

export default UserAvatar;


