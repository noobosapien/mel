import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const pages = ["Services", "Our Work", "About Us", "Contact"];

export default function Layout({ active, children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const router = useRouter();

  const handleRouteChange = (route) => (e) => {
    if (route !== active) router.push(`/${route}`);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Head>
        <title>Moorthi Engineering Limited</title>
        <meta name="description" content="Moorthi Engineering Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={(theme) => ({
          background: theme.palette.common.slateDarkGray,
        })}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h1"
              noWrap
              component="a"
              href="/"
              sx={(theme) => ({
                mr: 2,
                flexGrow: 1,
                display: { xs: 'flex' },
                fontSize: { xs: '1.5rem', md: '1.5rem' },
                fontWeight: 300,
                letterSpacing: '.3rem',
                // color: '#fff',
                textDecoration: 'none',
              })}
            >
              Moorthi Engineering Limited
            </Typography>

            <Box
              sx={(theme) => ({
                mr: 2,
                flexGrow: 10,
                display: { xs: 'flex' },
              })}
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: '#d6d6d6' }}
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-around',
              }}
            >
              <Button
                variant={active === 'services' ? 'text' : 'text'}
                sx={{
                  color: 'white',
                  borderBottom: active === 'services' ? '0.4rem solid' : '',
                }}
                onClick={handleRouteChange('services')}
              >
                Services
              </Button>

              <Button
                variant={active === 'work' ? 'text' : 'text'}
                sx={{
                  color: 'white',
                  borderBottom: active === 'work' ? '0.4rem solid' : '',
                }}
                onClick={handleRouteChange('work')}
              >
                Our Work
              </Button>

              <Button
                variant={active === 'about' ? 'text' : 'text'}
                sx={{
                  color: 'white',
                  borderBottom: active === 'about' ? '0.4rem solid' : '',
                }}
                onClick={handleRouteChange('about')}
              >
                About Us
              </Button>


              <Button
                variant={active === 'contact' ? 'outlined' : 'contained'}
                sx={(theme) => ({
                  color:
                    active === 'contact'
                      ? theme.palette.common.darkWhite
                      : theme.palette.common.slateDarkGray,
                })}
                onClick={handleRouteChange('contact')}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {children}

      <footer></footer>
    </>
  );
}