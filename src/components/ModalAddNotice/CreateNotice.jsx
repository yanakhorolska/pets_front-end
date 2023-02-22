import {
  FormPageWrapper,
  FormTitle,
  ModalCreateNotice,
  RadioGroupSex,
  RadioLabel,
  RadioSex,
  StyledStar,
  InputLabel,
  InputStyled,
  CommentInput,
  ButtonsWrapper,
  InputImage,
  InputImageWrapper,
  InputImageLabel,
} from './CreateNotice.styled';
// import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Icon from './svg/index';
import { ModalButton, NextButton } from 'styles/Buttons/index';
// import { useAddNoticeMutation } from 'redux/fetchNotice';

// const addNoticeSchema = Yup.object()
//   .shape({
//     title: Yup.string().min(2, 'Too Short!').max(100).required('Required'),
//     petName: Yup.string().min(2, 'Too Short!').max(50).required('Required'),
//     dateOfBirth: Yup.date().required('Required'),
//     breed: Yup.string().required('Required'),
//     sex: Yup.string().oneOf(['male', 'female']).required('Required'),
//     location: Yup.string().required('Required'),
//     price: Yup.number().min(0).max(100000),
//     comment: Yup.string().max(200),
//   })
//   .required();

const CreateNotice = ({ onClose }) => {
  const location = useLocation();
  const isSell = location.pathname.includes('sell');

  const [pageNumber, setPageNumber] = useState(1);

  // const [addNotice, { isLoading }] = useAddNoticeMutation();

  const formik = useFormik({
    initialValues: {
      title: '',
      petName: '',
      dateOfBirth: Date.now(),
      breed: '',
      sex: 'male',
      location: '',
      price: 0,
      imageUrl: '',
      comment: '',
    },
    //validationSchema: addNoticeSchema,
    onSubmit: async values => {
      console.log(values);
      //await addNotice(values);
    },
  });

  const loadFile = event => {
    if (!event.target.files.length) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const output = document.getElementById('preview');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <ModalCreateNotice onSubmit={formik.handleSubmit}>
      <FormTitle>Add pet</FormTitle>

      {pageNumber === 1 ? (
        <FormPageWrapper>
          <InputLabel>
            <span>
              Title of ad<StyledStar>*</StyledStar>
            </span>
            <InputStyled
              type="text"
              name="title"
              placeholder="Type title of ad"
              onChange={formik.handleChange}
              value={formik.values.title}
            ></InputStyled>
          </InputLabel>
          <InputLabel>
            <span>Name pet:</span>
            <InputStyled
              type="text"
              name="petName"
              placeholder="Type name pet"
              onChange={formik.handleChange}
              value={formik.values.petName}
            ></InputStyled>
          </InputLabel>
          <InputLabel>
            <span>Date of birth</span>
            <InputStyled
              type="date"
              name="dateOfBirth"
              placeholder="Type date of birth"
              onChange={formik.handleChange}
              value={formik.values.dateOfBirth}
            ></InputStyled>
          </InputLabel>
          <InputLabel>
            <span>Breed</span>
            <InputStyled
              type="text"
              name="breed"
              placeholder="Type breed"
              onChange={formik.handleChange}
              value={formik.values.breed}
            ></InputStyled>
          </InputLabel>
        </FormPageWrapper>
      ) : (
        <FormPageWrapper>
          <InputLabel>
            <span>
              The sex<StyledStar>*</StyledStar>
            </span>
          </InputLabel>
          <RadioGroupSex role="group" aria-labelledby="radio-sex-group">
            <RadioLabel>
              <Icon.Male />
              <RadioSex
                type="radio"
                name="sex"
                value="male"
                checked={formik.values.sex === 'male'}
                onChange={formik.handleChange}
              />
              Male
            </RadioLabel>
            <RadioLabel>
              <Icon.Female />
              <RadioSex
                type="radio"
                name="sex"
                value="female"
                checked={formik.values.sex === 'female'}
                onChange={formik.handleChange}
              />
              Female
            </RadioLabel>
            Picked {formik.values.sex}
          </RadioGroupSex>
          <InputLabel>
            <span>
              Location<StyledStar>*</StyledStar>:
            </span>
            <InputStyled
              type="text"
              name="location"
              placeholder="Type location"
              onChange={formik.handleChange}
              value={formik.values.location}
            ></InputStyled>
          </InputLabel>
          {isSell && (
            <InputLabel>
              <span>
                Price<StyledStar>*</StyledStar>:
              </span>
              <InputStyled
                type="number"
                name="price"
                placeholder="Type price"
                onChange={formik.handleChange}
                value={formik.values.price}
              ></InputStyled>
            </InputLabel>
          )}
          <InputImageLabel>
            <span>Load the pet's image</span>
            <InputImageWrapper>
              <InputImage
                id="imageUrl"
                type="file"
                name="imageUrl"
                accept="image/*"
                //onChange={formik.handleChange} нет эффекта
                onChange={event => {
                  formik.setFieldValue(
                    'imageUrl',
                    event.currentTarget.files[0]
                  );
                  loadFile(event);
                }}
              />
              <img id="preview" src="" alt="preview" />
            </InputImageWrapper>
          </InputImageLabel>
          <InputLabel>
            <span>Comments:</span>
            <CommentInput
              as="textarea"
              type="text"
              name="comment"
              placeholder="Type comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
            ></CommentInput>
          </InputLabel>
        </FormPageWrapper>
      )}

      {pageNumber === 1 && (
        <ButtonsWrapper>
          <ModalButton type="button" onClick={onClose}>
            Cancel
          </ModalButton>
          <NextButton type="button" onClick={() => setPageNumber(2)}>
            Next
          </NextButton>
        </ButtonsWrapper>
      )}
      {pageNumber === 2 && (
        <ButtonsWrapper>
          <ModalButton type="button" onClick={() => setPageNumber(1)}>
            Back
          </ModalButton>
          <NextButton type="submit">Done</NextButton>
        </ButtonsWrapper>
      )}
    </ModalCreateNotice>
  );
};
export default CreateNotice;
