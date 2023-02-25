import React from 'react';
import {
  useGetUserPetsQuery,
  useRemovePetByIdMutation,
} from '../../redux/fetchUser';
import {
  Box,
  PetBox,
  PetPhoto,
  PetList,
  PetDescripton,
  Span,
  Button,
} from './PetsList.styled';
import Icon from '../../styles/Buttons/icons/index';


const PetsList = () => {
  const [removePet] = useRemovePetByIdMutation();
  let { data } = useGetUserPetsQuery();
  console.log('pets', data);

  if (!data) {
    return;
  }

  const onClick = async idPet => {
    console.log(idPet);
    const status = await removePet(idPet).unwrap();
    console.log(status);
  };

  return (
    <Box>
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
                    {pet.comments}
                  </PetDescripton>
                </li>
              </PetList>
            </PetBox>
          ))
        : null}
    </Box>
  );
};

export default PetsList;
