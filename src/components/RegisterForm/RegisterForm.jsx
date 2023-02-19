import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation, useRegisterUserMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
// import s from './RegisterForm.module.scss';

const RegisterForm = () => {
  const [page, setPage] = useState(1);
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLogInUserMutation();
    const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      name: '',
      city: '',
      phone: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email
        // t('validation.email')
        ()
        .min(
          5
          // t('validation.emailMin')
        )
        .max(
          40
          // t('validation.emailMax')
        )
        .required
        // t('validation.required')
        (),
      password: Yup.string()
        .min(
          6
          //   t('validation.passwordMin')
        )
        .max(
          40
          //   t('validation.passwordMax')
        )
        .required
        // t('validation.required')
        (),
      confirm_password: Yup.string()
        .oneOf(
          [Yup.ref('password'), null]
          //   t('validation.notMatchPasswords')
        )
        .required('This is a required field'),
      name: Yup.string()
        .min(
          2
          //   t('validation.nameMin')
        )
        .max(
          20
          //   t('validation.nameMax')
        )
        .required
        // t('validation.required')
        (),
      city: Yup.string()
        .min(
          2
          //   t('validation.cityMin')
        )
        .max(
          30
          //   t('validation.cityMax')
        )
        .required
        // t('validation.required')
        (),
      phone: Yup.string()
        .matches(
          /^\+380\d{9}/
          //   t('validation.phone')
        )
        .length(
          13
          //   t('validation.phoneLength')
        )
        .required
        // t('validation.required')
        (),
    }),
  });

  let { email, password, confirm_password, name, city, phone } = formik.values;
  const {
    email: emailError,
    password: passwordError,
    confirm_password: confirmError,
    name: nameError,
    city: cityError,
    phone: phoneError,
  } = formik.errors;

  const onPageChange = async () => {
    if (page === 1) {
      if (email === '' || password === '' || confirm_password === '') {
        alert('Input all required fields');
        return;
      }
      if (passwordError || confirmError || emailError) {
        alert('Input all fields in the necessary format');
        return;
      }
      setPage(2);
      return;
    }
    setPage(1);
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    if (name === '' || city === '' || phone === '') {
      alert('Input all required fields');
      return;
    }
    if (nameError || cityError || phoneError) {
      alert('Input all fields in the necessary format');
      return;
    }

    try {
      await registerUser({
        email,
        password,
        name,
        city,
        phone,
      }).unwrap();
        const user = await loginUser({ email, password }).unwrap();
        dispatch(setCredentials(user));
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        {page === 1 && (
          <>
            <input
              //   className={s.input}
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={email}
            />
            <p
            //   className={s.error}
            >
              {formik.touched.email && emailError && emailError}
            </p>
            <input
              //   className={s.input}
              type="password"
              name="password"
              placeholder="Password"
              onChange={event => {
                formik.setFieldValue('password', event.target.value.trim());
              }}
              onBlur={formik.handleBlur}
              value={password}
            />
            <p
            //   className={s.error}
            >
              {formik.touched.password && passwordError && passwordError}
            </p>
            <input
              //   className={s.input}
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={confirm_password}
            />
            <p
            //   className={s['error--last']}
            >
              {formik.touched.confirm_password && confirmError && confirmError}
            </p>
          </>
        )}
        {page === 2 && (
          <>
            <input
              //   className={s.input}
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
            />
            <p
            //   className={s.error}
            >
              {formik.touched.name && nameError && nameError}
            </p>
            <input
              //   className={s.input}
              type="text"
              name="city"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={city}
            />
            <p
            //   className={s.error}
            >
              {formik.touched.city && cityError && cityError}
            </p>
            <input
              //   className={s.input}
              type="tel"
              name="phone"
              placeholder="Mobile phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={phone}
            />
            <p
            //   className={s['error--last']}
            >
              {formik.touched.phone && phoneError && phoneError}
            </p>
            <button
              //   className={`${s.button} ${s.accent}`}
              type="submit"
            >
              Register
            </button>
          </>
        )}
        <button
          //   className={`${s['button--last']} ${page === 1 && s.accent}`}
          type="button"
          onClick={onPageChange}
        >
          {page === 1 ? 'Next' : 'Back'}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
