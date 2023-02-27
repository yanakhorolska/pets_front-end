import {
  FormPageWrapper,
  FormTitle,
  ModalCreateNotice,
  RadioGroupSex,
  RadioSex,
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
      .matches(/^[a-zA-Z]+$/, 'Only letters!')
      .required('Title is required field'),
    petName: Yup.string()
      .min(2, 'Too Short!')
      .max(16, 'Too long!')
      .matches(/^[a-zA-Z]+$/, 'Only letters!')
      .required(),
    dateOfBirth: Yup.string()
      .matches(/^\d{2}([./-])\d{2}\1\d{4}$/, 'must have DD.MM.YYYY format')
      .required()
      .test('', '', (value, context) => {
        if (!value) return true;
        const currDate = new Date();
        const dateArr = value.split('.');
        const petDate = new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`);
        if (currDate < petDate) {
          return context.createError({
            message: "Pet can't be born in the future!",
          });
        }
        return true;
      }),
    breed: Yup.string()
      .min(2, 'Too Short!')
      .max(24, 'Too long!')
      .matches(/^[a-zA-Z]+$/, 'Only letters!')
      .required(),
  }),
  Yup.object().shape({
    sex: Yup.string()
      .oneOf(['male', 'female'])
      .required('sex of pet is required'),
    location: Yup.string()
      .matches(
        /[A-Za-z]+, [A-Za-z]+/,
        'Format is "region, city" (only latin letters)'
      )
      .required('This is a required field'),
    price: Yup.number()
      .min(0)
      .max(100000)
      .test('', '', (value, context) => {
        if ((context.parent.category === 'sell') & (value === 0)) {
          return context.createError({
            message: 'price must be greater than 0',
          });
        }
        return true;
      })
      .required(),
    comment: Yup.string().min(8, 'Too Short!').max(120, 'Too long!').required(),
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
            This announcement may make someone even happier!
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
            <span>Title of ad:</span>
            <InputStyled
              type="text"
              name="title"
              placeholder="Type title of ad"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            ></InputStyled>
            <FieldError>{formik.touched.title && titleError} </FieldError>
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
            <FieldError>{formik.touched.petName && petNameError} </FieldError>
          </InputLabel>
          <InputLabel>
            <span>Date of birth:</span>
            <InputStyled
              type="text"
              name="dateOfBirth"
              placeholder="DD.MM.YYYY"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            ></InputStyled>
            <FieldError>
              {formik.touched.dateOfBirth && dateOfBirthError}
            </FieldError>
          </InputLabel>
          <InputLabel>
            <span>Breed:</span>
            <InputStyled
              type="text"
              name="breed"
              placeholder="Type breed"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breed}
            ></InputStyled>
            <FieldError>{formik.touched.breed && breedError}</FieldError>
          </InputLabel>
        </FormPageWrapper>
      ) : (
        <FormPageWrapper>
          <InputLabel>
            <span>The sex:</span>
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
            <span>Location:</span>
            <InputStyled
              type="text"
              name="location"
              placeholder="Type location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            ></InputStyled>
            <FieldError>{formik.touched.location && locationError} </FieldError>
          </InputLabel>
          {formik.values.category === 'sell' && (
            <InputLabel>
              <span>Price:</span>
              <InputStyled
                type="number"
                name="price"
                placeholder="Type price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              ></InputStyled>
              <FieldError>{formik.touched.price && priceError}</FieldError>
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
              onBlur={formik.handleBlur}
              value={formik.values.comment}
            ></CommentInput>
            <FieldError>{formik.touched.comment && commentError} </FieldError>
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
