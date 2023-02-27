import React from 'react';
import { useState } from 'react';
import {
  UserDataInput,
  UserDataLabel,
  UserDataPar,
} from './UserDataItem.styled';
import { EditBtn } from '../../styles/Buttons/EditButton/EditButton.styled';
import Icon from '../../styles/Buttons/icons/index';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useTranslation } from '../../../node_modules/react-i18next/index';

const UserDataItem = ({ item, formik }) => {
  const [name] = item;
  const [focus, setFocus] = useState(false);

  const setInputType = () => {
    if (name === 'birthday') {
      return 'date';
    }
    return 'text';
  };

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
    setInputType();
    if (focus) {
      formik.handleSubmit();
    }
  };
  const { t } = useTranslation();
  const getName = value => {
    const name = value.toLowerCase();
    return t(`${name}`);
  };

  return (
    <>
      <UserDataLabel>{getName(name)}</UserDataLabel>
      {!focus ? (
        <UserDataPar
          onDoubleClick={() => setFocus(prev => !prev)}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      ) : (
        <UserDataInput
          type={setInputType()}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoFocus
        />
      )}
      <EditBtn type="button" onClick={onEdit}>
        {!focus ? <Icon.Edit /> : <Icon.CheckMark />}
      </EditBtn>
    </>
  );
};

export default UserDataItem;
