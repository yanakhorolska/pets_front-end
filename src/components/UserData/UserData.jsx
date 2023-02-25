import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import { UserDataBox, UserDataItemsBox, Box } from './UserData.styled';

const UserData = () => {
  const currentuser = useSelector(getUser);

  return (
    <Box>
      <UserPageTitle title={'My information:'} />
      <UserDataBox>
        <UserAvatar />
        < UserDataItemsBox>
          <UserDataItem
            initialValues={{ name: currentuser.name }}
            name="name"
            text="name"
            placeholder={currentuser.name}
          />
          <UserDataItem
            initialValues={{ email: currentuser.email }}
            name="email"
            text="email"
            placeholder={currentuser.email}
          />
          <UserDataItem
            initialValues={{ birthday: currentuser.birthday }}
            name="birthday"
            text="birthday"
            placeholder={currentuser.birthday}
          />
          <UserDataItem
            initialValues={{ city: currentuser.city }}
            name="city"
            text="city"
            placeholder={currentuser.city}
          />
          <UserDataItem
            initialValues={{ phone: currentuser.phone }}
            name="phone"
            text="phone"
            placeholder={currentuser.phone}
          />
        

        <LogoutButton />
        </ UserDataItemsBox>
      </UserDataBox>
    </Box>
  );
};

export default UserData;
