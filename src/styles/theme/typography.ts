import palette from "./palette";
import { Typography } from "@material-ui/core/styles/createTypography";
import { typography } from "@material-ui/system";

const myTypography: Typography = {
  ...typography({}),
  fontFamily: "'Deutsch', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  h1: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', serif"
  },
  h2: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', serif"
  },
  h3: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', serif"
  },
  h4: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', serif"
  },
  h5: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', serif"
  },
  h6: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', serif"
  },
  subtitle1: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', sans-serif"
  },
  subtitle2: {
    color: palette.text.secondary,
    fontFamily: "'Deutsch', sans-serif"
  },
  body1: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', sans-serif"
  },
  body2: {
    color: palette.text.secondary,
    fontFamily: "'Deutsch', sans-serif"
  },
  button: {
    color: palette.text.primary,
    fontFamily: "'Deutsch', sans-serif"
  },
  caption: {
    color: palette.text.secondary,
    fontFamily: "'Deutsch', sans-serif"
  },
  overline: {
    color: palette.text.secondary,
    fontFamily: "'Deutsch', sans-serif"
  }
};

export default myTypography;
