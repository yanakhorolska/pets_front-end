import { useDispatch} from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';

// import s from './LoginForm.module.scss';

const LoginForm = () => {
  const [loginUser] = useLogInUserMutation();
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
        .email('Invalid email address')
        .min(5, 'Email must include more tnan 5 characters')
        .max(40, 'Email must be less tnan 40 characters')
        .required('This is a required field'),
      password: Yup.string()
        .min(6, 'Password must include more tnan 6 characters')
        .max(40, 'Password must be less tnan 40 characters')
        .required('This is a required field'),
    }),
  });

  const { email, password } = formik.values;
  const { email: emailError, password: passwordError } = formik.errors;

  const onFormSubmit = async e => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Input all required fields');
      return;
    }
    if (passwordError || emailError) {
      alert('Input all fields in the necessary format');
      return;
    }

    try {
      const user = await loginUser({ email, password }).unwrap();
      dispatch(setCredentials(user));
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        // className={s.input}
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
        // className={s.input}
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
      //   className={s['error--last']}
      >
        {formik.touched.password && passwordError && passwordError}
      </p>
      <button
        //   className={`${s.button} ${s.accent}`}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
