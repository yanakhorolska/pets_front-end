import AddPet from 'components/ModalAddsPet/AddPet';
import ModalWindow from 'components/ModalWindow';
import { useAuth } from 'hooks/useAuth';
import React, { useCallback, useState } from 'react';
// import Icon from 'styles/Buttons/icons/index';
import {
  AddButtonTitle,
  AddButtonWrapper,
  AddNoticeStyled,
  StyledIconAdd,
} from './AddPetButton.styled';

const AddPetButton = () => {
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
            <StyledIconAdd />
          </AddNoticeStyled>
        </AddButtonWrapper>
      )}
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <AddPet onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

export default AddPetButton;
