import { useCallback, useState } from 'react';
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
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate('/login');
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const body = document.querySelector('body');
  if (isModalOpen === true) {
    body.classList.add('is-hidden');
  } else if (isModalOpen === false) {
    body.classList.remove('is-hidden');
  }

  const toggleModal = useCallback(() => {
    setIsModalOpen(prevState => {
      setIsModalOpen(!prevState);
    });
  }, []);

  return (
    <>
      <AddButtonWrapper>
        <AddButtonTitle>Add pet</AddButtonTitle>
        <AddButtonStyled
          type="button"
          onClick={() => {
            setIsModalOpen(true);
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

export default AddButton;
