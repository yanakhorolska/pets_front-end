import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import {useUpdateUserMutation} from '../../redux/fetchUser'
import { setUser } from 'redux/authSlice';


const UserDataItem = () => {
  const user = useSelector(getUser);
    const [disabled, setDisabled] = useState(true);
    const [updateUser] = useUpdateUserMutation()
    const dispatch = useDispatch()

  const initialValues = {
    name: `${user.name}`,
  };

    const handleSubmit = async (values) => {
    //   e.preventDefault()
        if (!disabled) ;
        const user = await updateUser(values.name).unwrap();
      dispatch(setUser(user));
  };

  return (
    <div>
      <Formik initialValues={{ name: `${initialValues.name}` }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">
            name
            <Field
              name="name"
              type="text"
            //   value={initialValues.name}
              id="name"
              disabled={disabled}
            />
          </label>
          <button type="submit" disabled={disabled}>
            Submit
          </button>
          <button type="button" onClick={() => setDisabled(!disabled)}>
            Edit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserDataItem;
