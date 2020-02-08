import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000';

export default {
  // type: 'light',
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A700,
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: black,
    secondary: black,
    link: colors.blue[600],
  },
  link: colors.blueGrey[100],
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
