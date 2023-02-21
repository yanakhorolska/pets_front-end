// import React, { useCallback, useState } from 'react';

// import ModalWindow from 'components/ModalWindow/ModalWindow';
// import ModalNotice from 'components/ModalNotice/ModalNotice';

// import { useAuth } from 'hooks/useAuth';

// const LearnMoreButton = id => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = useCallback(() => {
//     setIsModalOpen(prevState => {
//       setIsModalOpen(!prevState);
//     });
//   }, []);

//   return (
//     <>
//       {isModalOpen && (
//         <ModalWindow onClose={toggleModal}>
//           <ModalNotice />
//         </ModalWindow>
//       )}
//     </>
//   );
// };

// export default LearnMoreButton;
