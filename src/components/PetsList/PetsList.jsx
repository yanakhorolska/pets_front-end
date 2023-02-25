import React from 'react';
import { useGetUserPetsQuery } from '../../redux/fetchUser';
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
import { Loader } from 'components/Loader/Loader';

const PetsList = () => {
    const { data, isError, isLoading } = useGetUserPetsQuery();
    console.log('pets', data);

  if (!data) {
      return;
    }
  
    return (
      <Box>
        {isLoading && <Loader />}
        {!isError && data.length > 0
          ? data.map(pet => (
              <PetBox key={pet.id}>
                <PetPhoto src={pet.avatarURL} alt="Pet Foto" />

                <Button
                  type="submit"
                  onClick={() => {
                    console.log(pet._id);
                  }}
                >
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
                      {pet.comment}
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
