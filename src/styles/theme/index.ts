import { createMuiTheme, Theme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

//@ts-ignore
const baseTheme: Theme = {
  palette,
  typography,
};

export default createMuiTheme(baseTheme);
