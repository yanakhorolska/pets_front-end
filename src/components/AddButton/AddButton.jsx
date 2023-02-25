import { useCallback, useEffect, useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import {
  AddButtonText,
  AddButtonWrapper,
  AddButtonStyled,
  StyledIconAdd,
  AddSpanText,
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
        <AddSpanText>Add pet</AddSpanText>
        <AddButtonStyled
          type="button"
          onClick={() => {
            openModalWindow();
          }}
        >
          <StyledIconAdd />
          <AddButtonText>Add pet</AddButtonText>
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
