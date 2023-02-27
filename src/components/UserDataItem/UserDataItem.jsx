import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateUserMutation } from '../../redux/fetchUser';
import { setUpdatedUser } from 'redux/authSlice';
import {
  UserDataForm,
  UserDataInput,
  UserDataLabel,
  UserDataPar,
} from './UserDataItem.styled';
import { EditBtn } from '../../styles/Buttons/EditButton/EditButton.styled';
import Icon from '../../styles/Buttons/icons/index';
import { useTranslation } from 'react-i18next';
const UserDataItem = ({ item }) => {
  const [name, value] = item;
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [newValue, setNewValue] = useState('');
  const [updateUser] = useUpdateUserMutation();

  const setInputType = () => {
    if (name === 'birthday') {
      return 'date';
    }
    return 'text';
  };

  const onEdit = async () => {
    setFocus(prev => !prev);
    setNewValue(value);
    setInputType();
    const values = { [name]: newValue };
    // console.log(values);
    if (value === newValue) {
      return;
    }
    if (focus) {
      try {
        const user = await updateUser(values).unwrap();
        dispatch(setUpdatedUser(user));
        // console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const { t } = useTranslation();
  const getName = value => {
    const name = value.toLowerCase();
    return t(`${name}`);
  };

  return (
    <UserDataForm>
      <UserDataLabel>{getName(name)}</UserDataLabel>
      {!focus ? (
        <UserDataPar onDoubleClick={() => setFocus(prev => !prev)}>
          {value}
        </UserDataPar>
      ) : (
        <UserDataInput
          type={setInputType()}
          value={newValue}
          onChange={evt => setNewValue(evt.target.value)}
          autoFocus
        />
      )}
      <EditBtn type="button" onClick={onEdit}>
        {!focus ? <Icon.Edit /> : <Icon.CheckMark />}
      </EditBtn>
    </UserDataForm>
  );
};

export default UserDataItem;
