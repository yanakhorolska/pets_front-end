import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material/index';

export const Logo = styled(Typography)(({ theme }) => ({
  
    color: theme.palette.colors.black,
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '32px',
    letterSpacing: '0.07em',
    lineHeight:'0.66',
    textDecoration: 'none',
    marginRight:'80px'

 
}));
  

