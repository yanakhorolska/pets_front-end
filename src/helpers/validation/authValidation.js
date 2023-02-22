import * as Yup from 'yup';

export const firstPageRegister = Yup.object({
  email: Yup.string()
    .required()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  password: Yup.string().required().min(7).max(32),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
});

export const secondPageRegister = Yup.object({
  name: Yup.string()
    .max(70)
    .required()
    .matches(/^[a-zA-Z]+$/),
  city: Yup.string()
    .required()
    .matches(/[A-Za-z]+, [A-Za-z]+/),
  phone: Yup.string()
    .required()
    .matches(/^\+380\d{9}$/),
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .required()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  password: Yup.string().required(),
});
