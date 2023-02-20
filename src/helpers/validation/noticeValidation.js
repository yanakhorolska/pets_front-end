import * as Yup from 'yup';

export const addNoticeSellFirstPageValidation = Yup.object({
  title: Yup.string()
    .required()
    .matches(/^[a-zA-Z\s]+\.?$/iu),
  name: Yup.string().matches(/^[a-zA-Z]+$/),
  birthdate: Yup.string().matches(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  ),
  breed: Yup.string().matches(/^[a-zA-Z\s]+$/iu),
});

export const addNoticeSellSecondPageValidation = Yup.object({
  location: Yup.string()
    .required()
    .matches(/^[a-zA-Z]+,\s[a-zA-Z]+$/iu),
  price: Yup.string()
    .matches(/^[1-9][0-9]*$/)
    .required(),
  image: Yup.mixed(),
  comments: Yup.string().min(8).max(120),
});

export const addNoticeOtherFirstPageValidation = Yup.object({
  title: Yup.string()
    .required()
    .matches(/^[a-zA-Z\s]+\.?$/iu),
  name: Yup.string().matches(/^[a-zA-Z]+$/),
  birthdate: Yup.string().matches(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  ),
  breed: Yup.string().matches(/^[a-zA-Z\s]+$/iu),
});

export const addNoticeOtherSecondPageValidation = Yup.object({
  location: Yup.string()
    .required()
    .matches(/^[a-zA-Z]+,\s[a-zA-Z]+$/iu),
  image: Yup.mixed(),
  comments: Yup.string().min(8).max(120),
});
