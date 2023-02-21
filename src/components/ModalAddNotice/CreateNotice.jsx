import { Formik, Form, Field } from 'formik';
import { ModalCreateNotice } from './CreateNotice.styled';
import * as Yup from 'yup';

const addNoticeSchema = Yup.object()
  .shape({
    title: Yup.string().min(2, 'Too Short!').max(100).required('Required'),
    petName: Yup.string().min(2, 'Too Short!').max(50).required('Required'),
    dateOfBirth: Yup.date().required('Required'),
    breed: Yup.string().required('Required'),
    sex: Yup.string().valid('male', 'female').required('Required'),
    location: Yup.string().required('Required'),
    price: Yup.number().min(0).max(100000),
    comment: Yup.string().max(200).allow(null),
  })
  .required();

const CreateNotice = ({ onClose }) => {
  return (
    <ModalCreateNotice>
      <div>
        <h3>Add pet</h3>
        <Formik
          initialValues={{
            title: '',
            petName: '',
            dateOfBirth: Date.now(),
            breed: '',
            sex: 'male',
            location: '',
            price: 0,
            comment: '',
          }}
          validationSchema={addNoticeSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <Form></Form>
        </Formik>
      </div>
    </ModalCreateNotice>
  );
};
export default CreateNotice;
