import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledOrangeButton = styled(Button)(({ theme }) => ({
  width: 'inherit',
  color: theme.palette.colors.white,

  borderRadius: '40px',
  '&.MuiButton-root': {
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
    },
  },
  '&.MuiButton-outlined': {
    border: '2px solid ' + theme.palette.primary.main,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.colors.white
        : theme.palette.colors.black,
  },
}));
