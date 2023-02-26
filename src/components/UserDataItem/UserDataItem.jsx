import React from 'react';
// import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateUserMutation } from '../../redux/fetchUser';
import { setUpdatedUser } from 'redux/authSlice';
// import { EditButton } from '../../styles/Buttons/EditButton/EditButton';
// import { CheckButton } from '../../styles/Buttons/CheckButton/CheckButton';
import {
  UserDataForm,
  UserDataInput,
  UserDataLabel,
  UserDataPar,
} from './UserDataItem.styled';
import { EditBtn } from '../../styles/Buttons/EditButton/EditButton.styled';
import Icon from '../../styles/Buttons/icons/index';

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
    console.log(values);
    if (value === newValue) {
      return;
    }
    if (focus) {
      try {
        const user = await updateUser(values);
        dispatch(setUpdatedUser(user));
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const [disabled, setDisabled] = useState(true);
  // const dispatch = useDispatch();
  // const [updateUser] = useUpdateUserMutation();
  // const [inputeData, setInputData] = useState('');

  // const handleSubmit = async values => {
  //   console.log(values);
  //   values[text] = inputeData;
  //   try {
  //     if (!disabled);
  //     const user = await updateUser({ values }).unwrap();
  //     dispatch(setUpdatedUser(user));
  //     setInputData('');
  //     setDisabled(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const changeInput = e => {
  //   const data = e.currentTarget.value;
  //   setInputData(data);
  //   console.log(data);
  // };

  return (
    <UserDataForm>
      <UserDataLabel>{name}</UserDataLabel>
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

    // <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    //   <UserDataForm>
    //     <UserDataLabel htmlFor={name}>{name}: </UserDataLabel>
    //     {disabled ? (
    //       <UserDataInput
    //         type={type}
    //         onChange={changeInput}
    //         value={inputeData}
    //         name={name}
    //         id={name}
    //         placeholder={placeholder}
    //         disabled={disabled}
    //       />
    //     ) : (
    //       <UserDataInput
    //         type={type}
    //         onChange={changeInput}
    //         value={value}
    //         name={name}
    //         id={name}
    //       />
    //     )}
    //     {disabled ? (
    //       <EditButton onClick={() => setDisabled(!disabled)} />
    //     ) : (
    //       // <button type="button" onClick={() => setDisabled(!disabled)}>Edit</button>
    //       // :<button type="submit" disabled={disabled}>Submit</button>}
    //       <CheckButton disabled={disabled} type="submit" />
    //     )}
    //   </UserDataForm>
    // </Formik>
  );
};

export default UserDataItem;
