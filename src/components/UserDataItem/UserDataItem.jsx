import { useState } from 'react';
import {
  UserDataInput,
  UserDataLabel,
  UserDataItemBox,
  FieldError
} from './UserDataItem.styled';
import { EditBtn } from 'styles/Buttons/EditButton/EditButton.styled';
import Icon from 'styles/Buttons/icons/index';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const UserDataItem = ({ label, name, type, formik }) => {

  const [focus, setFocus] = useState(false);

  const onEdit = async () => {
    if (formik.errors[name]) {
      Notify.warning(formik.errors[name], {
        position: 'center-center',
        pauseOnHover: true,
        fontSize: '16px',
        timeout: 6000,
      });
      return;
    }

  setFocus(prev => !prev);
    if (focus) {
      formik.handleSubmit();
    }
  };
  
  return (
    <UserDataItemBox>
      <UserDataLabel>{label}</UserDataLabel>
      <div display={'flex'}>
        <UserDataInput
          disabled={!focus}
          type={type}
          name={name}
          {...formik.getFieldProps(name)}
        />
        {formik.touched[name] && formik.errors[name] ? (
          <FieldError>{formik.errors[name]} </FieldError>
        ) : (
          <FieldError />
        )}
      </div>
      <EditBtn type="button" onClick={onEdit}>
        {!focus ? <Icon.Edit /> : <Icon.CheckMark />}
      </EditBtn>
    </UserDataItemBox>
  );
};

export default UserDataItem;
