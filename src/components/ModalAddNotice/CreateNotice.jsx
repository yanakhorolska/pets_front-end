import { ModalCreateNotice } from './CreateNotice.styled';
// import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
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

  return (
    <ModalCreateNotice onSubmit={formik.handleSubmit}>
      <h3>Add pet</h3>

      {pageNumber === 1 ? (
        <>
          <label>
            Title of ad
            <input
              type="text"
              name="title"
              placeholder="Type title of ad"
              onChange={formik.handleChange}
            ></input>
          </label>
          <label>
            Name pet
            <input
              type="text"
              name="petName"
              placeholder="Type name pet"
              onChange={formik.handleChange}
            ></input>
          </label>
          <label>
            Date of birth
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Type date of birth"
              onChange={formik.handleChange}
            ></input>
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              placeholder="Type breed"
              onChange={formik.handleChange}
            ></input>
          </label>
        </>
      ) : (
        <>
          <div role="group" aria-labelledby="radio-sex-group">
            The sex*:
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={formik.values.sex === 'male'}
                onChange={formik.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={formik.values.sex === 'female'}
                onChange={formik.handleChange}
              />
              Female
            </label>
            <div>Picked: {formik.values.sex}</div>
          </div>
          <label>
            Location:
            <input
              type="text"
              name="location"
              placeholder="Type location"
              onChange={formik.handleChange}
            ></input>
          </label>
          {isSell && (
            <label>
              Price:
              <input
                type="number"
                name="price"
                placeholder="Type price"
                onChange={formik.handleChange}
              ></input>
            </label>
          )}
          <label>
            Load the pet's image:
            <input
              type="file"
              name="imageUrl"
              onChange={formik.handleChange}
            ></input>
          </label>
          <label>
            Comments:
            <input
              type="text"
              name="comment"
              placeholder="Type comment"
              onChange={formik.handleChange}
            ></input>
          </label>
        </>
      )}
      <div>
        {pageNumber === 1 && (
          <>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setPageNumber(2);
              }}
            >
              Next
            </button>
          </>
        )}
        {pageNumber === 2 && (
          <>
            <button
              type="button"
              onClick={() => {
                setPageNumber(1);
              }}
            >
              Back
            </button>
            <button type="submit">Submit</button>
          </>
        )}
      </div>
    </ModalCreateNotice>
  );
};
export default CreateNotice;
