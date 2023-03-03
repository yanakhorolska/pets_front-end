import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import {
  AddButtonTitle,
  AddButtonWrapper,
  AddButtonStyled,
  StyledIconAdd,
} from './AddPetButton.styled';
import ModalAddsPet from 'components/ModalAddsPet';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddPetButton = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    isModalOpen
      ? body.classList.add('is-hidden')
      : body.classList.remove('is-hidden');
  }, [isModalOpen]);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prevState => {
      setIsModalOpen(!prevState);
    });
  }, []);

  const openModalWindow = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <AddButtonWrapper>
        <AddButtonTitle>{t('addPet')}</AddButtonTitle>
        <AddButtonStyled
          type="button"
          onClick={() => {
            openModalWindow();
          }}
        >
          <StyledIconAdd />
        </AddButtonStyled>
      </AddButtonWrapper>

     

      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <ModalAddsPet onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
    
  );
};

export default AddPetButton;
