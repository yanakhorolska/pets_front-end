import ModalWindow from 'components/ModalWindow';
import { useAuth } from 'hooks/useAuth';
import React, { useCallback, useState } from 'react';
import { AddNoticeStyled } from './AddNoticeButton.styled';

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
        <AddNoticeStyled
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add pet
        </AddNoticeStyled>
      )}
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <div
            style={{ width: '100px', height: '50px', backgroundColor: 'white' }}
          >
            MODAL WINDOW TEST
          </div>
        </ModalWindow>
      )}
    </>
  );
};

export default AddNoticeButton;
