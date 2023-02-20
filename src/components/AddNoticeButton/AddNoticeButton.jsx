import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// тут мав би бути імпорт глобальної  модалки (ModalAddsPet). Хто її робить?

// тут треба прописати імпорт хука ЮзМодал.(наприклад, import { useModal } from 'hooks';) Хто її пише?

// export const getIsLogged = state => state.auth.isLogged;

const AddNoticeButton = () => {
  const isLogged = useSelector(state => state.auth.isLogged);
  const navigate = useNavigate();

  // logic of opening and closing modal window

  //   const { isModalOpen, closeModal, toggleModal } = useModal();

  const buttonSwitch = () => {
    if (isLogged) {
      //   toggleModal(); логіка перемикання модалки
      return;
    } else {
      navigate('/login');
      alert('Please login first');
      return;
    }
  };

  // --- example how modal window will be render --- //

  //   {
  //     isModalOpen && (
  //       <ModalGlobalEl onCloseModal={closeModal}>
  //         {<ModalAddNotice onCloseModal={closeModal} />}
  //       </ModalGlobalEl>
  //     );
  //   }

  return (
    <>
      <div>
        <button type="button" onClick={buttonSwitch}>
          Add pet
        </button>
      </div>
    </>
  );
};

export default AddNoticeButton;
