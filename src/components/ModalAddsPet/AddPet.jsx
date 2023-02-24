import { useFormik } from 'formik';
import { useState } from 'react';

import { useAddPetMutation } from 'redux/fetchUser';

import * as Yup from 'yup';

import { ModalAddPet, FormPageWrapper, FormDescription, FormTitle, InputLabel, InputStyled, InputImageWrapper, InputImageLabel, InputImage, CommentInput, ButtonsWrapper, FieldError, CloseFormButton } from './AddPet.styled';
import { ModalButton, NextButton } from 'styles/Buttons'

import Icon from '../ModalAddNotice/svg';
// import Box from 'components/Box';

const validationSchema = [
  Yup.object().shape({
    nickname:Yup.string().min(2).max(16).required().label("Name pet"), 
    breed: Yup.string().min(2).max(16).required("Breed is required"),
    birthday: Yup.date().typeError('Date of birth invalid Date').required().label("Date of birth").typeError('Date of birth invalid Date'),
  }),
  Yup.object().shape({
    avatar: Yup.mixed().required('Image pet is required'),
    comment: Yup.string().min(8).max(120).required("Comments is required"),
  })
]

export const AddPet = ({ onClose }) => {

  const [addPet] = useAddPetMutation();

  const [currentPage, setCurrentPage] = useState(0); 

  const onChangeAvatarImage = event => {
    if (event.target?.files) {
      formik.setFieldValue('avatar', event.target.files[0]);
    }
  };

  const customOnSubmit = async (values, actions) => {
    const status = await addPet(values).unwrap();
    if (status === 'success') {
      onClose();
    }
    actions.setSubmitting(false);
  }
 
  const customHandleSubmit = (values, actions) => {
    if (currentPage === 1) {
      customOnSubmit(values, actions);
    } else {
      setCurrentPage(1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      nickname: '',
      birthday: new Date(),
      breed: '',
      avatar: '',
      comment: '',
    },
    validationSchema : validationSchema[currentPage],
    onSubmit: customHandleSubmit,
    onChangeAvatarImage : async values => {
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
      <FormTitle>Add pet</FormTitle>
      {(() => {
        switch (currentPage) {
          case 0:
            return (
              <FormPageWrapper>
                <InputLabel>
                  Name pet
                  <InputStyled
                    type="text"
                    name="nickname"
                    placeholder="Type name pet"
                    value={formik.values.nickname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                {formik.touched.nickname && nicknameError ? (
                  <FieldError>{nicknameError} </FieldError>
                ) : null}
                </InputLabel>
                <InputLabel>
                  Date of birth
                  <InputStyled
                    type="date"
                    name="birthday"
                    placeholder="Type date of birth"
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                {formik.touched.birthday && birthdayError ? (
                  <FieldError>{birthdayError} </FieldError>
                ) : null}
                </InputLabel>
                <InputLabel>
                  Breed
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
                ) : null}
                </InputLabel>
                <ButtonsWrapper>
                  <ModalButton type="button" onClick={onClose}>
                    Cancel
                  </ModalButton>
                  <NextButton type="submit">Next</NextButton>
                </ButtonsWrapper>
              </FormPageWrapper>
            );
          case 1:
            return (
              <>
                <FormDescription>Add photo and some comments</FormDescription>
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
                    {formik.touched.avatar && avatarError ? (
                      <FieldError>{avatarError} </FieldError>
                    ) : null}
                  </InputImageWrapper>
                  <InputLabel>
                    Comments:
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
                    ) : null}
                  </InputLabel>
                  <ButtonsWrapper>
                    <ModalButton
                      type="button"
                      onClick={() => setCurrentPage(0)}
                    >
                      Back
                    </ModalButton>
                    <NextButton type="submit">Done</NextButton>
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
