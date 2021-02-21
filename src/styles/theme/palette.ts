import { colors } from "@material-ui/core";
import { Palette } from "@material-ui/core/styles/createPalette";

const white = "#FFFFFF";

//@ts-ignore
const myPalette: Palette = {
  // type: 'light',

  //@ts-ignore
  primary: {
    contrastText: white,
    main: "#3F3F3F"
  },
  divider: "rgba(0, 0, 0, 0.48)",

  //@ts-ignore
  background: "#F5F5F5",
  text: {
    primary: "#3F3F3F",
    secondary: "#3F3F3F",

    //@ts-ignore
    link: colors.blue[600]
  }
};

export default myPalette;
