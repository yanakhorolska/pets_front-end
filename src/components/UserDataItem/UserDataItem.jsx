import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useUpdateUserMutation } from '../../redux/fetchUser';
import { setUpdatedUser } from 'redux/authSlice';
// import { getToken } from 'redux/selectors';

const UserDataItem = ({ initialValues, name, value }) => {
  const [disabled, setDisabled] = useState(true);
  
  const dispatch = useDispatch();

  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async values => {
  try {
      if (!disabled);
    const user = await updateUser({values}).unwrap();
      dispatch(setUpdatedUser(user));
      console.log("User after update", user)
      
    }
    catch (error) {
      console.log(error)
    }
    
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>{name}: </label>
        <Field type="text" name={name} disabled={disabled} ></Field>
        <button type="button" onClick={() => setDisabled(!disabled)} >Edit</button>
        <button type="submit" disabled={disabled}>Submit</button>       
        
      </Form>
      
</Formik>
    
  )
}

export default UserDataItem