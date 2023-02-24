import React from 'react'
import PetsList from "../PetsList/PetsList.jsx"
import AddButton from 'components/AddButton';
import {AddPet} from '../ModalAddsPet/AddPet'

const PetsData = () => {
  return (
      <div>
          <p>My Pets</p>
          <AddButton component={AddPet} />
          <PetsList />
      </div>
  )
}

export default PetsData