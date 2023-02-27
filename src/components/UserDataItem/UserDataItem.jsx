import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateUserMutation } from '../../redux/fetchUser';
import { setUpdatedUser } from 'redux/authSlice';
import {
  // UserDataForm,
  UserDataInput,
  UserDataLabel,
  UserDataPar,
} from './UserDataItem.styled';
import { EditBtn } from '../../styles/Buttons/EditButton/EditButton.styled';
import Icon from '../../styles/Buttons/icons/index';

const UserDataItem = ({ item, formik }) => {
  const [name, value] = item;
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [newValue, setNewValue] = useState('');
  const [updateUser] = useUpdateUserMutation();

  console.log(formik);

  const setInputType = () => {
    if (name === 'birthday') {
      return 'date';
    }
    return 'text';
  };

  const onEdit = async () => {
    console.log('ON EDIT________');

    // setFocus(prev => !prev);
    // setNewValue(value);
    // setInputType();
    // const values = { [name]: newValue };

    // if (value === newValue) {
    //   return;
    // }
    // if (focus) {
    //   try {
    //     const user = await updateUser(values).unwrap();
    //     dispatch(setUpdatedUser(user));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    // <UserDataForm>
    <>
      <UserDataLabel>{name}</UserDataLabel>
      {!focus ? (
        <UserDataPar
          onDoubleClick={() => setFocus(prev => !prev)}
          value={formik.values[name]}
          onChange={() => {}}
        />
      ) : (
        <UserDataInput
          type={setInputType()}
          // value={newValue}
          name={name}
          value={formik.values[name]}
          // onChange={evt => {
          //   setNewValue(evt.target.value);
          // }}
          onChange={formik.handleChange}
          autoFocus
        />
      )}
      <EditBtn type={focus ? 'button' : 'submit'} onClick={onEdit}>
        {!focus ? <Icon.Edit /> : <Icon.CheckMark />}
      </EditBtn>
    </>
    // </UserDataForm>
  );
};

export default UserDataItem;
