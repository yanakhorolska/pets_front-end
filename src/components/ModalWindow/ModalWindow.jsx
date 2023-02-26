import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop } from 'styles/Modals/Modals.styled';

const container = document.getElementById('modal-root');

const ModalWindow = ({ onClose, children }) => {
  const onEscapePress = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  }, [onEscapePress]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      {children}
    </Backdrop>,
    container
  );
};

ModalWindow.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default ModalWindow;
