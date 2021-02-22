import { createMuiTheme, Theme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const baseTheme: Theme = {
  palette,
  typography,
};

export default createMuiTheme(baseTheme);
