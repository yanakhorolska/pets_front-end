import React, { useCallback, useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { LearnMoreButton } from 'styles/Buttons/index';

import { useAuth } from 'hooks/useAuth';
const LearnMoreButtonComponent = ({ id, owner }) => {
  console.log(id, 'id');
  const isLoggedIn = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

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
          <ModalNotice onClose={toggleModal} id={id} owner={owner} />
        </ModalWindow>
      )}
    </>
  );
};

export default LearnMoreButtonComponent;
