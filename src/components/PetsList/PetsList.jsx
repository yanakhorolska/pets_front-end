import React from 'react';
import {
  useGetUserPetsQuery,
  useRemovePetByIdMutation,
} from '../../redux/fetchUser';
import {
  PetBox,
  PetPhoto,
  PetList,
  PetDescripton,
  Span,
  Button,
} from './PetsList.styled';
import Icon from '../../styles/Buttons/icons/index';

import { Loader } from 'components/Loader/Loader';
import { useTranslation } from 'react-i18next';
const PetsList = () => {
  const { t } = useTranslation();
  const [removePet] = useRemovePetByIdMutation();
  let { data, isLoading } = useGetUserPetsQuery();
  // console.log('pets', data);

  // if (!data) {
  //   return;
  // }

  const onClick = async idPet => {
    await removePet(idPet).unwrap();
  };

  // return (
  //   <>
  //     {isLoading ? (
  //       <>
  //         <Loader />
  //       </>
  //     ) : null}
  //     {data.length > 0 ? (
  //       <div>
  //         {data.map(pet => (
  //           <PetBox key={pet.id}>
  //             <PetPhoto src={pet.avatarURL} alt="Pet Foto" />

  //             <Button type="submit" onClick={() => onClick(pet.id)}>
  //               <Icon.Trash style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
  //             </Button>

  //             <PetList>
  //               <li>
  //                 <PetDescripton>
  //                   <Span> Name:</Span> {pet.nickname}
  //                 </PetDescripton>
  //               </li>
  //               <li>
  //                 <PetDescripton>
  //                   <Span> Date of birth:</Span>
  //                   {new Date(pet.birthday).toLocaleDateString('en-GB')}
  //                 </PetDescripton>
  //               </li>
  //               <li>
  //                 <PetDescripton>
  //                   <Span> Breed:</Span> {pet.breed}
  //                 </PetDescripton>
  //               </li>
  //               <li>
  //                 <PetDescripton>
  //                   <Span> Comments:</Span>
  //                   {pet.comment}
  //                 </PetDescripton>
  //               </li>
  //             </PetList>
  //           </PetBox>
  //         ))}
  //       </div>
  //     ) : null}
  //   </>
  // );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {' '}
          {data.length > 0
            ? data.map(pet => (
                <PetBox key={pet.id}>
                  <PetPhoto src={pet.avatarURL} alt="Pet Foto" />

                  <Button type="submit" onClick={() => onClick(pet.id)}>
                    <Icon.Trash style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
                  </Button>
                  <PetList>
                    <li>
                      <PetDescripton>
                        <Span> {t('name')}:</Span> {pet.nickname}
                      </PetDescripton>
                    </li>
                    <li>
                      <PetDescripton>
                        <Span> {t('datePet')}:</Span>
                        {new Date(pet.birthday).toLocaleDateString('en-GB')}
                      </PetDescripton>
                    </li>
                    <li>
                      <PetDescripton>
                        <Span> {t('breed')}:</Span> {pet.breed}
                      </PetDescripton>
                    </li>
                    <li>
                      <PetDescripton>
                        <Span> {t('comments')}:</Span>
                        {pet.comment}
                      </PetDescripton>
                    </li>
                  </PetList>
                </PetBox>
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default PetsList;
