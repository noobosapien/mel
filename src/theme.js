import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const col = '#006D77';
const slateGray = '#2A4747';
const slateDarkGray = '#292f36';
const emeraldGreen = '#439775';
const black = '#474747';
const darkWhite = '#d6d6d6';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: slateDarkGray,
    primary: {
      main: darkWhite,
    },
    secondary: {
      main: darkWhite,
    },
    error: {
      main: red.A400,
    },
    common: {
      white: '#ffffff',
      black,
      slateGray,
      emeraldGreen,
      slateDarkGray,
      darkWhite,
    },
  },

  grid: {
    backgroundColor: slateDarkGray,
  },

  typography: {
    h1: {
      fontSize: '3.5rem',
      fontFamily: 'Montserrat',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '5.5rem',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '4.5rem',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '4rem',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '3rem',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '1.0rem',
      color: darkWhite,
      backgroundColor: slateDarkGray,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: '#eee',
      },
      label: {
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        color: '#fff',
      },
    },
    '.MuiTextField-root': {
      fontFamily: 'Montserrat',
    },
  },
});

export default theme;
