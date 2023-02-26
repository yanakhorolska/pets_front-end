import React, { useCallback, useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { LearnMoreButton } from 'styles/Buttons/index';

import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'react-i18next';
const LearnMoreButtonComponent = ({ id }) => {
  const isLoggedIn = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
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
      {isLoggedIn && (
        <LearnMoreButton
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {t('learnMore')}
        </LearnMoreButton>
      )}
      {isModalOpen && (
        <ModalWindow onClose={toggleModal}>
          <ModalNotice onClose={toggleModal} id={id} />
        </ModalWindow>
      )}
    </>
  );
};

export default LearnMoreButtonComponent;
