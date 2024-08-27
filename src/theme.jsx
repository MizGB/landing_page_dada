import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D6BB71",
      white: "#FFFFFF",
      black: "#000000",
    },
    secondary: {
      main: "#ffeb3b",
    },
  },
  typography: {
    fontFamily: "Assistant",
  },
  button: {
    fontFamily: "Assistant",
    fontWeight: "bold",
  },
});
export default theme;
