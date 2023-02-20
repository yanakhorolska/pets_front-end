import CreateNotice from 'components/ModalAddNotice/CreateNotice';
import ModalWindow from 'components/ModalWindow';
import { useAuth } from 'hooks/useAuth';
import React, { useCallback, useState } from 'react';
import Icon from 'styles/Buttons/icons/index';
import {
  AddButtonTitle,
  AddButtonWrapper,
  AddNoticeStyled,
} from './AddNoticeButton.styled';

const AddNoticeButton = () => {
  const isLoggedIn = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prevState => {
      setIsModalOpen(!prevState);
    });
  }, []);

  return (
    <>
      {isLoggedIn && (
        <AddButtonWrapper>
          <AddButtonTitle>Add pet</AddButtonTitle>
          <AddNoticeStyled
            type="button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <Icon.Add />
          </AddNoticeStyled>
        </AddButtonWrapper>
      )}
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <CreateNotice onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

export default AddNoticeButton;
