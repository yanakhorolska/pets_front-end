import * as React from 'react';

import { Logos } from 'components/Logo/logo';
import { OrangeButton } from 'components/CustomComponents/Buttons/Buttons';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

//import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import '@fontsource/manrope';
const pages = ['News', 'Find pet', 'Our friends'];

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{
          bgcolor: 'transparent',
        }}
      >
        <Toolbar disableGutters>
          <Logos />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                width: 1,
                heigth: 1,
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  to={page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  paddingright="80px"
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <MenuItem
                component={RouterLink}
                to="/"
                key={page}
                //onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mr: '80px',
                  color: '#111111',
                  fontFamily: 'Manrope',
                  display: 'block',
                }}
              >
                {page}
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton>
                <OrangeButton color="primary">
                  <AccountCircleRoundedIcon
                    width="28px"
                    heigth="28px"
                    sx={{ mr: '12px' }}
                  />
                  Account
                </OrangeButton>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
