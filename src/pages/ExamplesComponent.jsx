import AddButton from 'components/AddButton/index';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import Box from 'components/Box';
import ModalAddsPet from 'components/ModalAddsPet';

const ExamplesComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap="10px"
      minHeight="calc(100vh - 80px)"
    >
      <Box bg= "tomato">USER</Box>
      <Box display="flex" gridGap="10px">
        <Box width="200px" mineight= "200px">My Information :</Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow="1"
        >
          <Box> My pets </Box>
          <AddButton>
            <ModalAddsPet />
          </AddButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ExamplesComponent;
