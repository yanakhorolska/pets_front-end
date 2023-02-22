import { useAuth } from 'hooks/useAuth';
import { useCallback, useState } from 'react';

import ModalWindow from 'components/ModalWindow';

import {
    AddButtonTitle,
    AddButtonWrapper,
    AddButtonStyled,
    StyledIconAdd,
  } from './AddButton.styled';
  

const AddButton = ({ children, ...props }) => {
  console.log('props', props);

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
          <AddButtonStyled
            type="button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <StyledIconAdd />
          </AddButtonStyled>
        </AddButtonWrapper>
      )}
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>{children}</ModalWindow>
      )}
    </>
  );
};

export { AddButton };
