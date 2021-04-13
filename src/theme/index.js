import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from "./palette";

const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: palette["dark"],
  })
);

const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: palette["light"],
  })
);

const theme = {
  dark: darkTheme,
  light: lightTheme,
};

export default theme;
