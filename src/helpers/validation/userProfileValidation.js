import * as Yup from 'yup';

export const userProfileValidation = Yup.object({
  name: Yup.string()
    .min(1)
    .max(70)
    .matches(/^[a-zA-Z]+$/),
  email: Yup.string().matches(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  birthdate: Yup.string().matches(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  ),
  phone: Yup.string().matches(/^\+380\d{9}$/),
  city: Yup.string().matches(/[A-Za-z]+, [A-Za-z]+/),
});

export const addUserPetFirstPageValidation = Yup.object({
  name: Yup.string()
    .min(2)
    .max(16)
    .required()
    .matches(/^[a-zA-Z\s]+?$/iu),
  birthdate: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    )
    .required(),
  breed: Yup.string()
    .min(2)
    .max(16)
    .required()
    .matches(/^[a-zA-Z\s]+?$/iu),
});

export const addUserPetSecondPageValidation = Yup.object({
  comments: Yup.string().min(8).max(120).required(),
  image: Yup.mixed(),
});
