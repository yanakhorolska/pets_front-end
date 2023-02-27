import React from 'react';
import PetsList from '../PetsList/PetsList.jsx';
import AddPetButton from 'components/AddPetButton';
import AddPet from 'components/ModalAddsPet';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import { TitleWrapper } from '../UserData/UserData.styled';


const PetsData = () => {
  return (
    <div>
      <TitleWrapper>
        <UserPageTitle title={'My pets:'} />
        <AddPetButton component={AddPet} />
      </TitleWrapper>

      <PetsList />
    </div>
  );
};

export default PetsData;
