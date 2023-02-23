import { useFormik } from 'formik';
import { useState } from 'react';

import * as Yup from 'yup';

import { ModalAddPet, FormTitle, FormPageWrapper, InputLabel, InputStyled, InputImageWrapper, InputImageLabel, InputImage, CommentInput, ButtonsWrapper, FieldError } from './AddPet.styled';
import { ModalButton, NextButton } from 'styles/Buttons'

import Icon from '../ModalAddNotice/svg';
import IconButtons from 'styles/Buttons/icons'
import Box from 'components/Box';
import { useTheme } from 'styled-components';

const validationSchema = [Yup.object().shape({
  nickname:Yup.string().min(2).max(16).required("Name pet is required"), 
  breed: Yup.string().min(2).max(16).required("Breed is required"),
  birthday: Yup.date()}),
  Yup.object().shape({
  avatar: Yup.mixed().required('Image pet is required'),
  comment: Yup.string().min(8).max(120).required("Comments is required"),
})]

export const AddPet = ({ onClose }) => {

  const theme = useTheme()

  const [currentPage, setCurrentPage] = useState(0);

  // const [addPets] = use(); //fetch

  const onChangeAvatarImage = event => {
    if (event.target?.files) {
      formik.setFieldValue('avatar', event.target.files[0]);
    }
  };

  const customOnSubmit = async (values, actions) => {
     console.log(values)
     //if currentPage === 2 
    //  actions.setSubmitting(false);
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
      birthday: Date,
      breed: '',
      avatar: '',
      comment: '',
    },
    validationSchema : validationSchema[currentPage],
    onSubmit: customHandleSubmit,
    //  onSubmit: async values => {
    //    console.log(values);
    //    //await addPet(values);
    //  },
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


  // const styleButtonClose = {
  //   position:"absolute",
  //   top:"0",
  //   right:"0",
  //   "border-radius": "50%",
    
  //   bgc: "tomato",
  //   transform: "translate(-50%, 50%)",
  // }

  return (
    <ModalAddPet onSubmit={formik.handleSubmit}>
      <Box
        position="absolute"
        top="0"
        right="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="40px"
        height="40px"
        borderRadius="50%"
        backgroundColor={theme.color.background}
      >
        <IconButtons.Close onClick={onClose} />
      </Box>
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
                </InputLabel>
                {formik.touched.nickname && nicknameError ? (
                  <FieldError>{nicknameError} </FieldError>
                ) : null}
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
                </InputLabel>
                {formik.touched.birthday && birthdayError ? (
                  <FieldError>{birthdayError} </FieldError>
                ) : null}
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
                </InputLabel>
                {formik.touched.breed && breedError ? (
                  <FieldError>{breedError} </FieldError>
                ) : null}
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
                <span mx="auto">Add photo and some comments</span>
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
                    ) : null}
                  <InputLabel>
                    Comments:
                    <CommentInput
                      as="textarea"
                      type="text"
                      name="comment"
                      placeholder="Type comment"
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
