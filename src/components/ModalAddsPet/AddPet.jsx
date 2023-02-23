import { useFormik } from 'formik';
// import { useState } from 'react';

import { ModalAddPet } from './AddPet.styled';

export const AddPet = ({ onClose }) => {
  // console.log("ModalAddPet props", props);

  // const [currentPage, setCurrentPage] = useState(1);

  const formik = useFormik({
    initialValues: {
      nickname: '',
      birthday: Date,
      breed: '',
      avatar: '',
      comment: '',
    },
    //validationSchema: addNoticeSchema,
    onSubmit: async values => {
      console.log(values);
      //await addPet(values);
    },
  });

  return (
    <ModalAddPet onSubmit={formik.handleSubmit}>
      <h3>Add Pet</h3>
      {/* <>
        {(() => {
          switch (currentPage) {
            case 1:
              return (
                <>
                  {' '}
                  page 1
                  <label>
                    Name pet
                    <input
                      type="text"
                      name="nickname"
                      placeholder="Type name pet"
                      value={formik.values.nickname}
                      onChange={formik.handleChange}
                    />
                  </label>
                  <label>
                    Date of birth
                    <input
                      type="date"
                      name="birthday"
                      placeholder="Type date of birth"
                      value={formik.values.birthday}
                      onChange={formik.handleChange}
                    />
                  </label>
                  <label>
                    Breed
                    <input
                      type="text"
                      name="breed"
                      placeholder="Type breed"
                      value={formik.values.breed}
                      onChange={formik.handleChange}
                    />
                  </label>
                  <button type="button" onClick={onClose}>
                    {' '}
                    Cancel{' '}
                  </button>
                  <button type="button" onClick={() => setCurrentPage(2)}>
                    {' '}
                    Next{' '}
                  </button>
                </>
              );
            case 2:
              return (
                <>
                  {' '}
                  page 2
                  <label>
                    Load the pet's image:
                    <input
                      type="file"
                      name="avatar"
                      onChange={formik.handleChange}
                    ></input>
                  </label>
                  <label>
                    Comments:
                    <input
                      type="text"
                      name="comment"
                      placeholder="Type comment"
                      value={formik.values.comment}
                      onChange={formik.handleChange}
                    ></input>
                  </label>
                  <button type="button" onClick={() => setCurrentPage(1)}>
                    {' '}
                    Back{' '}
                  </button>
                  <button type="submit"> Done </button>
                </>
              );
          }
        })()}
      </> */}
    </ModalAddPet>
  );
};
