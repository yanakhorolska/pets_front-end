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
import Notiflix from 'notiflix';

const PetsList = () => {
  const [removePet] = useRemovePetByIdMutation();
  let { data, isLoading } = useGetUserPetsQuery();

  const onClick = idPet => {
    Notiflix.Confirm.show(
      'I am your friend!',
      'Are you sure you want to delete my card??',
      'Yes',
      'No',
      async function okCb() {
        await removePet(idPet).unwrap();
      },
      function cancelCb() {
        return;
      },
      {
        width: '250px',
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#F59256',
        titleColor: '#F59256',
        titleFontSize: '24px',
        messageFontSize: '20px',
      }
    );
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                        <Span> Name:</Span> {pet.nickname}
                      </PetDescripton>
                    </li>
                    <li>
                      <PetDescripton>
                        <Span> Date of birth:</Span>
                        {new Date(pet.birthday).toLocaleDateString('en-GB')}
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
