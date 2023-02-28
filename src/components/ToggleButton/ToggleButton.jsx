import { Button } from './ToggleButton.styled';
import Icon from '../../styles/Buttons/icons';

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
      {currentTheme === 'dark' ? <Icon.Moon /> : <Icon.Sun />}
    </Button>
  );
};
const mode = localStorage.getItem('data-theme');
export { ToggleButton, mode };
