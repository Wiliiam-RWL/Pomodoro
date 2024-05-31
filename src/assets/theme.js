import { createTheme } from "@mui/material";

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#C40C0C",
      light: "#FA9F9F",
      dark: "#8C1717",
      contrastText: "#FCFCFC",
    },
    secondary: {
      main: "#8799CE",
      light: "#A2B7F7",
      dark: "#6C7AA4",
      contrastText: "#FCFCFC",
    },
    disabled: {
      main: "#7180AC",
      light: "#8799CE",
      dark: "#5A6689",
      contrastText: "#FCFCFC",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'url("./bg2.jpg")', // Set your image URL here
          backgroundSize: "cover", // Cover the entire viewport
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "repeat", // Do not repeat the image
        },
      },
    },
  },
});

export default theme;
