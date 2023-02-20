import { Button } from './ToggleButton.styled';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const ToggleButton = () => {
  const setDarkMode = () => {
    localStorage.setItem('data-theme', 'dark');
  };

  const setLightMode = () => {
    localStorage.setItem('data-theme', 'light');
  };

  const currentTheme = localStorage.getItem('data-theme');
  const onClick = () => {
    if (currentTheme === 'light' || !currentTheme) {
      setDarkMode();
    } else if (currentTheme === 'dark' || !currentTheme) {
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
