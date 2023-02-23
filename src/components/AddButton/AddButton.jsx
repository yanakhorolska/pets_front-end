import { useCallback, useState } from 'react';

import ModalWindow from 'components/ModalWindow';

import {
  AddButtonTitle,
  AddButtonWrapper,
  AddButtonStyled,
  StyledIconAdd,
} from './AddButton.styled';

const AddButton = ({ isVisible = true, component: Component }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const body = document.querySelector('body');
  if (isModalOpen === true) {
    body.classList.add('is-hidden');
  }

  const toggleModal = useCallback(() => {
    setIsModalOpen(prevState => {
      setIsModalOpen(!prevState);
    });
  }, []);

  return (
    <>
      {isVisible && (
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
        <ModalWindow onClose={toggleModal}>
          <Component onClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

// const AddButton = ({ children, ...props }) => {
//   console.log('props', props);

//   const isLoggedIn = useAuth();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = useCallback(() => {
//     setIsModalOpen(prevState => {
//       setIsModalOpen(!prevState);
//     });
//   }, []);

//   return (
//     <>
//       {isLoggedIn && (
//         <AddButtonWrapper>
//           <AddButtonTitle>Add pet</AddButtonTitle>
//           <AddButtonStyled
//             type="button"
//             onClick={() => {
//               setIsModalOpen(true);
//             }}
//           >
//             <StyledIconAdd />
//           </AddButtonStyled>
//         </AddButtonWrapper>
//       )}
//       {isModalOpen && (
//         <ModalWindow onClose={toggleModal} >{children}</ModalWindow>
//       )}
//     </>
//   );
// };

export default AddButton;
