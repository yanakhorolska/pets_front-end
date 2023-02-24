import React from 'react'
import PetsList from "../PetsList/PetsList.jsx"
import AddButton from 'components/AddButton';
import {AddPet} from '../ModalAddsPet/AddPet'
import UserPageTitle from '../UserPageTitle/UserPageTitle'
import {Box} from '../UserData/UserData.styled'

const PetsData = () => {
  return (
      <Box>
          <UserPageTitle title={"My pets:"} />
          <AddButton component={AddPet} />
          <PetsList />
      </Box>
  )
}

export default PetsData