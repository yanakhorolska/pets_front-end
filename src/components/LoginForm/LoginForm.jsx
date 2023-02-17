import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { showAlertMessage } from '../../utils/showMessages';
import { loginUser } from '../../redux/auth/authOperations';
import { getAuthError } from '../../redux/auth/authSelectors';
// import s from './LoginForm.module.scss';

const LoginForm = () => {
  const error = useSelector(getAuthError);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      email: Yup.string()
      .email("Invalid email address")
      .min(5, "Email must include more tnan 5 characters")
      .max(40, "Email must be less tnan 40 characters")
      .required("This is a required field"),
    password: Yup.string()
      .min(6, "Password must include more tnan 6 characters")
      .max(40, "Password must be less tnan 40 characters")
      .required("This is a required field"),
  }),
  });

  useEffect(() => {
    if (!error) return;
    showAlertMessage(error);
  }, [error]);

  const { email, password } = formik.values;
  const { email: emailError, password: passwordError } = formik.errors;

  const onFormSubmit = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      showAlertMessage("Input all required fields");
      return;
    }
    if (passwordError || emailError) {
      showAlertMessage("Input all fields in the necessary format");
      return;
    }
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        // className={s.input}
        type="email"
        name="email"
        // placeholder={`*${t('login.placeholders.email')}`}
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
        // className={s.input}
        type="password"
        name="password"
        // placeholder={`*${t('login.placeholders.password')}`}
        onChange={event => {
          formik.setFieldValue('password', event.target.value.trim());
        }}
        onBlur={formik.handleBlur}
        value={password}
      />
          <p
            //   className={s['error--last']}
          >
        {formik.touched.password && passwordError && passwordError}
      </p>
          <button
            //   className={`${s.button} ${s.accent}`}
              type="submit">
        {/* {t('login.button')} */}
      </button>
    </form>
  );
};

export default LoginForm;