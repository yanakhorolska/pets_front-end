import React from 'react';
import PetsList from '../PetsList/PetsList.jsx';
import AddPetButton from 'components/AddPetButton';
import { AddPet } from '../ModalAddsPet/AddPet';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import { TitleWrapper } from '../UserData/UserData.styled';
import { PetsBox } from './PetsData.styled';

const PetsData = () => {
  return (
    <PetsBox>
      <TitleWrapper>
        <UserPageTitle title={'My pets:'} />
        <AddPetButton component={AddPet} />
      </TitleWrapper>

      <PetsList />
    </PetsBox>
  );
};

export default PetsData;
