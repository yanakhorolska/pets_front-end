import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateUserMutation } from '../../redux/fetchUser';
import { setUpdatedUser } from 'redux/authSlice';
import { EditButton } from '../../styles/Buttons/EditButton/EditButton'
import { CheckButton } from '../../styles/Buttons/CheckButton/CheckButton'
import {UserDataForm, UserDataInput, UserDataLabel} from './UserDataItem.styled'

const UserDataItem = ({ initialValues, text, name, placeholder }) => {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
  const [inputeData, setInputData] = useState('');

  const handleSubmit = async values => {
    console.log(values);
    values[text] = inputeData;
    try {
      if (!disabled);
      const user = await updateUser({ values }).unwrap();
      dispatch(setUpdatedUser(user));
      setInputData('');
      setDisabled(true);
    } catch (error) {
      console.log(error);
    }
  };

  const changeInput = e => {
    const data = e.currentTarget.value;
    setInputData(data);
    console.log(data);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <UserDataForm >
        <UserDataLabel htmlFor={name}>{name}: </ UserDataLabel>
        <UserDataInput
          // as={UserDataInput}
          type="text"
          onChange={changeInput}
          value={inputeData}
          name={name}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
        />
        {disabled ? <EditButton onClick={() => setDisabled(!disabled)} />
          // <button type="button" onClick={() => setDisabled(!disabled)}>Edit</button>
          // :<button type="submit" disabled={disabled}>Submit</button>}
          : <CheckButton disabled={disabled}/>}
        
      </UserDataForm>
    </Formik>
  );
};

export default UserDataItem;


