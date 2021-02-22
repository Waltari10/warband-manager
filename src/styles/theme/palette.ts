import { colors } from '@material-ui/core';
import { Palette } from '@material-ui/core/styles/createPalette';

const white = '#FFFFFF';


const myPalette: Palette = {

  primary: {
    contrastText: white,
    main: '#3F3F3F',
    light: 'red', // not used
    dark: 'red', // not used
  },
  divider: 'rgba(0, 0, 0, 0.48)',

  background: {
    default: '#F5F5F5',
    paper: '#F5F5F5',
  },
  text: {
    primary: '#3F3F3F',
    secondary: '#3F3F3F',

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    link: colors.blue[600],
  },
};

export default myPalette;
