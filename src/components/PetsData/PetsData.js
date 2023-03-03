import React from 'react';
import PetsList from '../PetsList/PetsList.jsx';
import AddPetButton from 'components/AddPetButton';
import AddPet from 'components/ModalAddsPet';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import { TitleWrapper } from '../UserData/UserData.styled';
import { useTranslation } from 'react-i18next';

const PetsData = () => {
  const { t } = useTranslation();
  return (
    <div>
      <TitleWrapper>
        <UserPageTitle title={t('myPets') + ':'} />
        <AddPetButton component={AddPet} />
      </TitleWrapper>

      <PetsList />
    </div>
  );
};

export default PetsData;
