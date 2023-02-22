import React, { useCallback, useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { LearnMoreButton } from 'styles/Buttons/index';

import { useAuth } from 'hooks/useAuth';

const LearnMoreButtonComponent = () => {
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
        <LearnMoreButton
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Learn more
        </LearnMoreButton>
      )}
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <ModalNotice onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

export default LearnMoreButtonComponent;
