import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import {
  UserDataBox,
  UserDataItemsBox,
  DataBox,
  TitleWrapperData,
} from './UserData.styled';

const UserData = () => {
  const currentuser = useSelector(getUser);

  const date = new Date(currentuser.birthday).toLocaleDateString('en-GB')
  return (
    <DataBox>
      <TitleWrapperData>
        <UserPageTitle title={'My information:'} />
      </TitleWrapperData>
      <UserDataBox>
        <UserAvatar />
        <UserDataItemsBox>
          <UserDataItem
            initialValues={{ name: currentuser.name }}
            name="name"
            text="name"
            type="text"
            placeholder={currentuser.name}
          />
          <UserDataItem
            initialValues={{ email: currentuser.email }}
            name="email"
            text="email"
            type="email"
            placeholder={currentuser.email}
          />
          <UserDataItem
            initialValues={{ birthday: currentuser.birthday }}
            name="birthday"
            text="birthday"
            type="text"
            placeholder={date}
          />
          <UserDataItem
            initialValues={{ phone: currentuser.phone }}
            name="phone"
            text="phone"
            type="tel"
            placeholder={currentuser.phone}
          />
          <UserDataItem
            initialValues={{ city: currentuser.city }}
            name="city"
            text="city"
            type="text"
            placeholder={currentuser.city}
          />

          <LogoutButton />
        </UserDataItemsBox>
      </UserDataBox>
    </DataBox>
  );
};

export default UserData;
