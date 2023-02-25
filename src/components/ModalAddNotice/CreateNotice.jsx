import {
  FormPageWrapper,
  FormTitle,
  ModalCreateNotice,
  RadioGroupSex,
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
  RadioGroupCategories,
  RadioSexLabel,
  RadioCaregoryLabel,
  RadioCaregory,
  FormDescription,
  CloseButtonAbsolute,
} from './CreateNotice.styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Icon from './svg/index';
import { ModalButton, ModalStyledButton } from 'styles/Buttons/index';
import { useAddNoticeMutation } from 'redux/fetchNotice';

const validationSchemas = [
  Yup.object().shape({
    category: Yup.string()
      .oneOf(['lostFound', 'inGoodHands', 'sell'])
      .required(),
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(48, 'Too long!')
      .required('Title is required field'),
    petName: Yup.string().min(2, 'Too Short!').max(16, 'Too long!'),
    dateOfBirth: Yup.string()
      .matches(
        /^\d{2}([./-])\d{2}\1\d{4}$/,
        'date of birth must have DD.MM.YYYY format!'
      )
      .test('', '', (value, contex) => {
        const currDate = new Date();
        const dateArr = value.split('.');
        const petDate = new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`);
        if (currDate < petDate) {
          return contex.createError({
            message: "Pet can't be born in the future!",
          });
        }
        return true;
      }),
    breed: Yup.string().min(2, 'Too Short!').max(24, 'Too long!'),
  }),
  Yup.object().shape({
    sex: Yup.string()
      .oneOf(['male', 'female'])
      .required('sex of pet is required'),
    location: Yup.string()
      .matches(
        /[A-Za-z]+, [A-Za-z]+/,
        'Please, enter the data in format "region, city" (only latin letters)'
      )
      .required('This is a required field'),
    price: Yup.number().min(0).max(100000),
    comment: Yup.string().min(8, 'Too Short!').max(120, 'Too long!'),
  }),
];

const CreateNotice = ({ onClose }) => {
  const { pathname } = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  const [addNotice] = useAddNoticeMutation();

  const currentCategory = useMemo(() => {
    if (pathname.includes('lost-found')) {
      return 'lostFound';
    } else if (pathname.includes('for-free')) {
      return 'inGoodHands';
    } else if (pathname.includes('sell')) {
      return 'sell';
    } else {
      return 'sell';
    }
  }, [pathname]);

  const reverceDate = dateString => {
    const dateArr = dateString.split('.');
    if (dateArr.length !== 3) {
      return dateString;
    }
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
  };

  const _submitForm = async (values, actions) => {
    const { ...formValues } = values;
    console.log(formValues);
    if (formValues.dateOfBirth.length) {
      formValues.dateOfBirth = reverceDate(formValues.dateOfBirth);
    }
    try {
      const status = await addNotice(formValues).unwrap();
      if (status === 'success') {
        onClose();
      }
    } catch (error) {
      const { status = '', data = '' } = error;
      alert(`Status: ${status}, error: ${data?.message}`);
    }
    actions.setSubmitting(false);
  };

  const _handleSubmit = (values, actions) => {
    if (pageNumber === 2) {
      _submitForm(values, actions);
    } else {
      setPageNumber(2);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      category: currentCategory,
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
    validationSchema: validationSchemas[pageNumber - 1],
    onSubmit: _handleSubmit,
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

  return (
    <ModalCreateNotice onSubmit={formik.handleSubmit}>
      <CloseButtonAbsolute onClick={onClose} />
      <FormTitle>Add pet</FormTitle>

      {pageNumber === 1 ? (
        <FormPageWrapper>
          <FormDescription>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </FormDescription>
          <RadioGroupCategories
            role="group"
            aria-labelledby="radio-categories-group"
          >
            <RadioCaregoryLabel>
              <RadioCaregory
                type="radio"
                name="category"
                value="lostFound"
                checked={formik.values.category === 'lostFound'}
                onChange={formik.handleChange}
              />
              lost/found
            </RadioCaregoryLabel>
            <RadioCaregoryLabel>
              <RadioCaregory
                type="radio"
                name="category"
                value="inGoodHands"
                checked={formik.values.category === 'inGoodHands'}
                onChange={formik.handleChange}
              />
              in good hands
            </RadioCaregoryLabel>
            <RadioCaregoryLabel>
              <RadioCaregory
                type="radio"
                name="category"
                value="sell"
                checked={formik.values.category === 'sell'}
                onChange={formik.handleChange}
              />
              sell
            </RadioCaregoryLabel>
          </RadioGroupCategories>
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
              type="text"
              name="dateOfBirth"
              placeholder="DD.MM.YYYY"
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
            <RadioSexLabel>
              <Icon.Male />
              <RadioSex
                type="radio"
                name="sex"
                value="male"
                checked={formik.values.sex === 'male'}
                onChange={formik.handleChange}
              />
              Male
            </RadioSexLabel>
            <RadioSexLabel>
              <Icon.Female />
              <RadioSex
                type="radio"
                name="sex"
                value="female"
                checked={formik.values.sex === 'female'}
                onChange={formik.handleChange}
              />
              Female
            </RadioSexLabel>
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
          {formik.values.category === 'sell' && (
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
                onChange={event =>
                  formik.setFieldValue('imageUrl', event.currentTarget.files[0])
                }
              />
              {formik.values.imageUrl ? (
                <img
                  id="preview"
                  src={URL.createObjectURL(formik.values.imageUrl)}
                  alt="preview"
                />
              ) : (
                <StyledIconAdd />
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
          <ModalStyledButton type="submit">Next</ModalStyledButton>
        </ButtonsWrapper>
      )}
      {pageNumber === 2 && (
        <ButtonsWrapper>
          <ModalButton type="button" onClick={() => setPageNumber(1)}>
            Back
          </ModalButton>
          <ModalStyledButton type="submit">Done</ModalStyledButton>
        </ButtonsWrapper>
      )}
    </ModalCreateNotice>
  );
};
export default CreateNotice;
