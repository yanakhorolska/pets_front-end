import { useFormik } from 'formik';

const AddPet = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      dateOfBirth: Date.now(),
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
    <form onSubmit={formik.handleSubmit}>
      <h3>Add Pet</h3>
      <div>
        <> page 1
          <label>
            Name pet
            <input
              type="text"
              name="nickname"
              placeholder="Type name pet"
              onChange={formik.handleChange}
            />
          </label>
          <label>
            Date of birth
            <input
              type="date"
              name="birthday"
              placeholder="Type date of birth"
              onChange={formik.handleChange}
            />
          </label>
          <label>
            Breed
            <input
              type="text"
              name="breed"
              placeholder="Type breed"
              onChange={formik.handleChange}
            />
          </label>
        </>
        <> page 2
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
              onChange={formik.handleChange}
            ></input>
          </label>
        </>
      </div>
      <button type="button"> Next </button>
      <button type="button"> Prev </button>
      <button type="submit"> Done </button>
    </form>
  );
};

export default AddPet;
