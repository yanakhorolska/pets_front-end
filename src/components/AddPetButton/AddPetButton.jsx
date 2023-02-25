import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import {
  AddButtonTitle,
  // AddButtonWrapper,
  AddButtonStyled,
  StyledIconAdd,
} from './AddPetButton.styled';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const AddPetButton = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

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
      {/* <AddButtonWrapper> */}
        
        <AddButtonStyled
          type="button"
          onClick={() => {
            openModalWindow();
          }}
        >       
         <AddButtonTitle>Add pet</AddButtonTitle> 
        <StyledIconAdd />
        </AddButtonStyled>
      {/* </AddButtonWrapper> */}

      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <Component onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
    // <div>AddPetButton</div>
  )
}

export default AddPetButton

/*import { useCallback, useEffect, useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import {
  AddButtonTitle,
  AddButtonWrapper,
  AddButtonStyled,
  StyledIconAdd,
} from './AddButton.styled';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddButton = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

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
        <AddButtonTitle>Add pet</AddButtonTitle>
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
          <Component onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

export default AddButton;*/
