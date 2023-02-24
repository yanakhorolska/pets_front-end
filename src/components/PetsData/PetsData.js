import React from 'react'
import PetsList from "../PetsList/PetsList.jsx"
import AddButton from 'components/AddButton';
import {AddPet} from '../ModalAddsPet/AddPet'
import UserPageTitle from '../UserPageTitle/UserPageTitle'

const PetsData = () => {
  return (
      <div>
          <UserPageTitle title={"My pets:"} />
          <AddButton component={AddPet} />
          <PetsList />
      </div>
  )
}

export default PetsData