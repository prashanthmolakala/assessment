import { createMuiTheme } from '@material-ui/core/styles';
import { grey, red, lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b5a92',
      light: '#F5F6FA',
    },
    secondary: {
      main: grey[700],
      light: grey[200],
    },
    error: {
      main: red[500],
      light: red[100],
    },
    text: {
      hint: lightGreen[100],
    },
  },
  typography: {
    fontFamily: 'Roboto',
    subtitle1: {
      color: grey[600],
      fontSize: '1.4em',
    },
    subtitle2: {
      color: grey[600],
      fontSize: '1.4em',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#fff',
      },
    },
    MuiPaper: {
      elevation2: {
        boxShadow: '0px 10px 15px -16px #bbbbbb',
      },
    },
  },
});
export default theme;
