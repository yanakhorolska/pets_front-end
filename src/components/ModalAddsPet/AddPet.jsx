import { useFormik } from 'formik';
import { useState, useEffect } from 'react';

import { useAddPetMutation } from 'redux/fetchUser';

import * as Yup from 'yup';

import {
  ModalAddPet,
  FormPageWrapper,
  FormDescription,
  FormTitle,
  InputLabel,
  InputStyled,
  InputImageWrapper,
  InputImageLabel,
  InputImage,
  CommentInput,
  ButtonsWrapper,
  FieldError,
  CloseFormButton,
} from './AddPet.styled';
import { ModalButton, NextButton } from 'styles/Buttons';

import Icon from '../ModalAddNotice/svg';
import { useTranslation } from 'react-i18next';
const validationSchema = [
  Yup.object().shape({
    nickname: Yup.string().min(2).max(16).required().label('Name pet'),
    breed: Yup.string()
      .min(2)
      .max(16)
      .required('Breed is required')
      .label('Breed'),
    birthday: Yup.date()
      .typeError(({ label }) => `${label} invalid format DD.MM.YYYY`)
      .min(
        new Date('1900.01.01'),
        ({ label, min }) =>
          `${label} field must be later than ${min.toLocaleDateString()}`
      )
      .max(new Date(), ({ label }) => `${label} future date not allowed`)
      .transform((value, originalValue) => {
        try {
          const date = originalValue.split('.');
          if (date.length === 3) {
            return new Date(`${date[2]}-${date[1]}-${date[0]}`);
          }
          return <FieldError />;
        } catch (e) {
          return <FieldError />;
        }
      })
      .required(
        ({ label }) => `${label} is a required field in format DD.MM.YYYY`
      )
      .label('Date of birth'),
  }),
  Yup.object().shape({
    avatar: Yup.mixed().required('Image pet is required'),
    comment: Yup.string().min(8).max(120).required().label('Comments'),
  }),
];

export const AddPet = ({ onClose }) => {
  const { t } = useTranslation();
  const [addPet] = useAddPetMutation();

  const [currentPage, setCurrentPage] = useState(0);

  const onChangeAvatarImage = event => {
    if (event.target?.files) {
      formik.setFieldValue('avatar', event.target.files[0]);
    }
  };

  const customOnSubmit = async (values, actions) => {
    console.log(values);
    const { birthday, ...reqValue } = values;
    const status = await addPet({
      birthday: new Date(birthday).toLocaleDateString('fr-CA'),
      ...reqValue,
    }).unwrap();
    if (status === 'success') onClose();
    actions.setSubmitting(false);
  };

  const customHandleSubmit = (values, actions) => {
    if (currentPage === 1) {
      customOnSubmit(values, actions);
    } else {
      setCurrentPage(1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (
        (event.charCode || event.keyCode === 13) &&
        event.target.nodeName === 'INPUT'
      ) {
        const form = event.target.form;
        const arrayFormInput = Array.prototype.filter.call(
          form,
          elem => elem.nodeName === 'INPUT'
        );
        const index = arrayFormInput.indexOf(event.target);
        const newFocusElem = arrayFormInput[index + 1];
        if (newFocusElem) newFocusElem.focus();
        event.preventDefault();
      }
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      nickname: '',
      birthday: '',
      breed: '',
      avatar: '',
      comment: '',
    },
    validationSchema: validationSchema[currentPage],
    onSubmit: customHandleSubmit,
    onChangeAvatarImage: async values => {
      formik.setFieldValue('avatar', values.files[0]);
    },
  });

  const {
    nickname: nicknameError,
    birthday: birthdayError,
    breed: breedError,
    avatar: avatarError,
    comment: commentError,
  } = formik.errors;

  return (
    <ModalAddPet onSubmit={formik.handleSubmit} autoComplete="off">
      <CloseFormButton onClick={onClose} />
      <FormTitle>{t('addPet')}</FormTitle>
      {(() => {
        switch (currentPage) {
          case 0:
            return (
              <FormPageWrapper>
                <InputLabel>
                  {t('namePet')}
                  <InputStyled
                    type="text"
                    name="nickname"
                    placeholder="Type name pet"
                    autoFocus={true}
                    value={formik.values.nickname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.nickname && nicknameError ? (
                    <FieldError>{nicknameError} </FieldError>
                  ) : (
                    <FieldError />
                  )}
                </InputLabel>
                <InputLabel>
                  {t('datePet')}
                  <InputStyled
                    //type="date"
                    type="nunber"
                    name="birthday"
                    placeholder="Type date of birth"
                    value={formik.values.birthday}
                    onChange={e => {
                      formik.handleChange(e);
                      formik.setFieldValue(
                        'birthday',
                        e.currentTarget.value
                          .replace(/\D/g, '')
                          .replace(/(\d{2})(\d{2})(\d*)/, '$1.$2.$3')
                      );
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.birthday && birthdayError ? (
                    <FieldError>{birthdayError} </FieldError>
                  ) : (
                    <FieldError />
                  )}
                </InputLabel>
                <InputLabel>
                  {t('breed')}
                  <InputStyled
                    type="text"
                    name="breed"
                    placeholder="Type breed"
                    value={formik.values.breed}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.breed && breedError ? (
                    <FieldError>{breedError} </FieldError>
                  ) : (
                    <FieldError />
                  )}
                </InputLabel>
                <ButtonsWrapper>
                  <ModalButton type="button" tabindex="-1" onClick={onClose}>
                    {t('cancel')}
                  </ModalButton>
                  <NextButton type="submit">{t('next')}</NextButton>
                </ButtonsWrapper>
              </FormPageWrapper>
            );
          case 1:
            return (
              <>
                <FormDescription>{t('addText')}</FormDescription>
                <FormPageWrapper>
                  <InputImageWrapper sx={{ margin: 'auto' }}>
                    <InputImageLabel>
                      <InputImage
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={onChangeAvatarImage}
                        onBlur={formik.handleBlur}
                      />
                      {!formik.values?.avatar ? (
                        <Icon.Add />
                      ) : (
                        <img
                          src={URL.createObjectURL(formik.values.avatar)}
                          alt="preview avatar"
                        />
                      )}
                    </InputImageLabel>
                  </InputImageWrapper>
                  {formik.touched.avatar && avatarError ? (
                    <FieldError>{avatarError} </FieldError>
                  ) : (
                    <FieldError />
                  )}
                  <InputLabel>
                    {t('comments')}:
                    <CommentInput
                      as="textarea"
                      type="text"
                      name="comment"
                      placeholder="Type comments"
                      value={formik.values.comment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></CommentInput>
                    {formik.touched.comment && commentError ? (
                      <FieldError>{commentError} </FieldError>
                    ) : (
                      <FieldError />
                    )}
                  </InputLabel>
                  <ButtonsWrapper>
                    <ModalButton
                      type="button"
                      onClick={() => setCurrentPage(0)}
                    >
                      {t('back')}
                    </ModalButton>
                    <NextButton type="submit"> {t('done')}</NextButton>
                  </ButtonsWrapper>
                </FormPageWrapper>
              </>
            );
          default:
            return <></>;
        }
      })()}
    </ModalAddPet>
  );
};
