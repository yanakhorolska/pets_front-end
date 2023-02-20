import { Button } from './ToggleButton.styled';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const ToggleButton = () => {
  const currentTheme = localStorage.getItem('data-theme');
  const setDarkMode = () => {
    localStorage.setItem('data-theme', 'dark');
  };

  const setLightMode = () => {
    localStorage.setItem('data-theme', 'light');
  };
  const onClick = () => {
    if (currentTheme === 'light') {
      setDarkMode();
    } else if (currentTheme === 'dark') {
      setLightMode();
    }
    window.location.reload();
  };

  return (
    <Button onClick={onClick}>
      {currentTheme === 'light' ? (
        <LightModeIcon />
      ) : (
        <ModeNightIcon sx={{ color: 'white' }} />
      )}
    </Button>
  );
};
const mode = localStorage.getItem('data-theme');
export { ToggleButton, mode };
