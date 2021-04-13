const light = {
  type: "light",
  primary: {
    main: "#ef8b34",
    light: "rgb(71, 145, 219)",
    dark: "rgb(17, 82, 147)",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ffb74d",
    main: "#f9b934",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  background: {
    paper: "#fff",
    default: "#fff",
    level2: "#f5f5f5",
    level1: "#fff",
    footer: "#1b1642",
  },
};

const dark = {
  type: "dark",
  primary: {
    main: "#ef8b34",
    light: "rgb(166, 212, 250)",
    dark: "rgb(100, 141, 174)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  secondary: {
    light: "#ffb74d",
    main: "#f9b934",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  background: {
    paper: "#424242",
    default: "#121212",
    level2: "#333",
    level1: "#212121",
    footer: "#000000",
  },
};

const palette = {
  light,
  dark,
};

export default palette;
