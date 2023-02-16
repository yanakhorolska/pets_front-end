import ColorMode from 'components/ColorMode';
import { OrangeButton } from 'components/CustomComponents/Buttons/Buttons';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <>
      {/* Для примера */}
      <ColorMode />
      <div>home</div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '200px',
        }}
      >
        <OrangeButton color="primary">Contained button</OrangeButton>
        <OrangeButton variant="outlined" color="primary">
          Outlined button
        </OrangeButton>
      </Box>
    </>
  );
};

export default Home;
