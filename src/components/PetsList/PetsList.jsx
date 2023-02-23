import React from 'react';
import { useGetPetsQuery } from '../../redux/fetchNotice';
import {
  Box,
  PetBox,
  PetPhoto,
  PetList,
  PetDescripton,
  Span,
} from './PetsList.styled';
import { TrashButton } from '../../styles/Buttons/TrashButton/TrashButton';

const PetsList = () => {
  const { data, isLoading } = useGetPetsQuery();
  console.log('pets', data);

  if (!data) {
    return;
  }

  return (
    <Box>
      {data.length > 0 ? (
        data.map(pet => (
          <PetBox>
            <PetPhoto src={pet.avatarURL} alt="Pet Foto" />

            <TrashButton
              type="button"
              onClick={() => {
                console.log(pet._id);
              }}
            />

            <PetList>
              <li>
                <PetDescripton>
                  <Span> Name:</Span> {pet.nickname}
                </PetDescripton>
              </li>
              <li>
                <PetDescripton>
                  <Span> Date of birth:</Span> {pet.birthday}
                </PetDescripton>
              </li>
              <li>
                <PetDescripton>
                  <Span> Breed:</Span> {pet.breed}
                </PetDescripton>
              </li>
              <li>
                <PetDescripton>
                  <Span> Comments:</Span>
                  {pet.comments}
                </PetDescripton>
              </li>
            </PetList>
          </PetBox>
        ))
      ) : (
        <div>nothing</div>
      )}
    </Box>
  );
};

export default PetsList;

// import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';

// const PetsList = () => {
//     const dispatch = useDispatch();
//     const petsList = useSelector();
//     const convertDate = date => {
//         return moment(date).format('DD.MM.YYYY');
//     };

//     return (
//         <>
//             <ul>
//                 {petsList.length > 0 ? (
//                     petsList.map(pet => (
//                         <li key={pet._id} >
//                             <img
//                                 src={
//                                     pet.imgURL ===
//                                     '../../images/defoult/defoultPets.jpg'
//                                     ? '../../images/defoult/defoultPets.jpg'
//                                     : pet.imgURL
//                                 }
//                                 alt="Pet Foto"
//                             />
//                             <div >
//                                 <button
//                                     type="button"
//                                     onClick={() => {
//                                         dispatch((pet._id));
//                                     }}
//                                 >
//                                     del
//                                 </button>
//                                 <PetDescripton>
//                                     <span> Name:</span> {pet.name}
//                                 </PetDescripton>
//                                 <PetDescripton>
//                                     <span> Date of birth:</span> {convertDate(pet.birthday)}
//                                 </PetDescripton>
//                                 <PetDescripton>
//                                     <span> Breed:</span> {pet.breed}
//                                 </PetDescripton>
//                                 <PetDescripton>
//                                     <span> Comments:</span>{pet.comments}
//                                 </PetDescripton>
//                             </div>
//                         </li>
//                     ))
//                 ) : (
//                     <img
//                         src="../../images/defoult/defoultPets.jpg"
//                         alt="Pet Foto"
//                     />
//                 )}
//             </ul>
//         </>
//     );
// };
// export default PetsList;
