import React from 'react'
import PetsList from "../PetsList/PetsList.jsx"
import AddPetButton from 'components/AddPetButton';
import {AddPet} from '../ModalAddsPet/AddPet'
import UserPageTitle from '../UserPageTitle/UserPageTitle'
import {Box, TitleWrapper} from '../UserData/UserData.styled'

const PetsData = () => {
  return (
    <Box>
      <TitleWrapper>
        <UserPageTitle title={"My pets:"} />
      <AddPetButton component={AddPet} />
      </TitleWrapper>
          
      
          <PetsList />
      </Box>
  )
}

export default PetsData