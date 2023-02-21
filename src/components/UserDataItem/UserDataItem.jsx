import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { useUpdateUserMutation } from '../../redux/fetchUser';
import { setUser } from 'redux/authSlice';

const UserDataItem = () => {
  const user = useSelector(getUser);
  const [disabled, setDisabled] = useState(true);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();

  const initialValues = {
      name: `${user.name}`,
      email: `${user.email}`,
      city: `${user.city}`,
      phone: `${user.pnone}`,
      birthday: `${user.birthday}`,
  };

  const handleSubmit = async values => {
    //   e.preventDefault()
    if (!disabled);
    const user = await updateUser(values.name).unwrap();
    dispatch(setUser(user));
  };

  return (
    <div>
      <Formik
        initialValues={{ name: `${initialValues.name}` }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">
            Name
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
        <Formik
        initialValues={{ email: `${initialValues.email}` }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">
            Email
            <Field
              name="email"
              type="text"
              //   value={initialValues.name}
              id="email"
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
        <Formik
        initialValues={{ birthday: `${initialValues.birthday}` }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="birthday">
            Birthday
            <Field
              name="birthday"
              type="text"
              //   value={initialValues.name}
              id="birthday"
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
          <Formik
        initialValues={{ phone: `${initialValues.phone}` }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="phone">
            Phone
            <Field
              name="phone"
              type="text"
              //   value={initialValues.name}
              id="birthday"
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
          <Formik
        initialValues={{ city: `${initialValues.city}` }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="city">
            City
            <Field
              name="city"
              type="text"
              //   value={initialValues.name}
              id="birthday"
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
