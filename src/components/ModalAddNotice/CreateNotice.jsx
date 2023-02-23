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
  StyledIconAdd,
  FieldError,
} from './CreateNotice.styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Icon from './svg/index';
import { ModalButton, NextButton } from 'styles/Buttons/index';
import { useAddNoticeMutation } from 'redux/fetchNotice';

const addNoticeSchema = Yup.object()
  .shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too long!')
      .required('Title is required field'),
    petName: Yup.string().min(2, 'Too Short!').max(50, 'Too long!'),
    dateOfBirth: Yup.date().max(new Date(), "You can't be born in the future!"),
    breed: Yup.string().min(2, 'Too Short!').max(50, 'Too long!'),
    sex: Yup.string().oneOf(['male', 'female']).required('Required'),
    location: Yup.string().required('Location is required field'),
    price: Yup.number().min(0).max(100000),
    comment: Yup.string().max(200, 'Too long!'),
  })
  .required();

const CreateNotice = ({ onClose }) => {
  const location = useLocation();
  const isSell = location.pathname.includes('sell');

  const [pageNumber, setPageNumber] = useState(1);
  const [imageSrc, setImageSrc] = useState('');

  const [addNotice] = useAddNoticeMutation();

  const formik = useFormik({
    initialValues: {
      title: '',
      petName: '',
      dateOfBirth: '',
      breed: '',
      sex: 'male',
      location: '',
      price: 0,
      imageUrl: '',
      comment: '',
    },
    validationSchema: addNoticeSchema,
    onSubmit: async values => {
      console.log(values);
      values.category = 'lostFound';
      const result = await addNotice(values).unwrap();
      console.log(result);
    },
  });

  const {
    title: titleError,
    petName: petNameError,
    dateOfBirth: dateOfBirthError,
    breed: breedError,
    location: locationError,
    price: priceError,
    comment: commentError,
  } = formik.errors;

  const onInputImageChange = event => {
    formik.setFieldValue('imageUrl', event.currentTarget.files[0]);
    loadFile(event);
  };

  const loadFile = event => {
    if (!event.target.files.length) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
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
              onBlur={formik.handleBlur}
              value={formik.values.title}
            ></InputStyled>
            {formik.touched.title && titleError ? (
              <FieldError>{titleError} </FieldError>
            ) : null}
          </InputLabel>
          <InputLabel>
            <span>Name pet:</span>
            <InputStyled
              type="text"
              name="petName"
              placeholder="Type name pet"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.petName}
            ></InputStyled>
            {formik.touched.petName && petNameError ? (
              <FieldError>{petNameError} </FieldError>
            ) : null}
          </InputLabel>
          <InputLabel>
            <span>Date of birth</span>
            <InputStyled
              type="date"
              name="dateOfBirth"
              placeholder="Type date of birth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            ></InputStyled>
            {formik.touched.dateOfBirth && dateOfBirthError ? (
              <FieldError>{dateOfBirthError} </FieldError>
            ) : null}
          </InputLabel>
          <InputLabel>
            <span>Breed</span>
            <InputStyled
              type="text"
              name="breed"
              placeholder="Type breed"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breed}
            ></InputStyled>
            {formik.touched.breed && breedError ? (
              <FieldError>{breedError} </FieldError>
            ) : null}
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
              onBlur={formik.handleBlur}
              value={formik.values.location}
            ></InputStyled>
            {formik.touched.location && locationError ? (
              <FieldError>{locationError} </FieldError>
            ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.price}
              ></InputStyled>
              {formik.touched.price && priceError ? (
                <FieldError>{priceError} </FieldError>
              ) : null}
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
                onChange={onInputImageChange}
              />
              {imageSrc ? (
                <img id="preview" src={imageSrc} alt="preview" />
              ) : (
                <StyledIconAdd
                  visible={(formik.values.imageUrl === '').toString()}
                />
              )}
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
            {formik.touched.comment && commentError ? (
              <FieldError>{commentError} </FieldError>
            ) : null}
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
