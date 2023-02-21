import { useDispatch} from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { AuthError, AuthErrorLast, AuthInput, AuthButton } from "./LoginForm.styled"

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
        .required('This is a required field'),
      password: Yup.string()
        .min(7, 'Password must include more tnan 7 characters')
        .max(32, 'Password must be less tnan 32 characters')
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
      <AuthInput
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={email}
      />
      <AuthError>
        {formik.touched.email && emailError && emailError}
        </AuthError>
      <AuthInput
        type="password"
        name="password"
        placeholder="Password"
        onChange={event => {
          formik.setFieldValue('password', event.target.value.trim());
        }}
        onBlur={formik.handleBlur}
        value={password}
      />
      <AuthErrorLast>
        {formik.touched.password && passwordError && passwordError}
      </AuthErrorLast>
      <AuthButton type="submit" accent={true} last={true}>
        Login
        </AuthButton>
      </form>
  );
};

export default LoginForm;
