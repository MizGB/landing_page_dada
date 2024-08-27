import muistyled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import theme from "../../theme";
export const NavBarContainer = muistyled(Grid, {
  shouldForwardProp: (prop) => prop !== "showNav",
})(({ showNav }) => ({
  backgroundColor: "#fff",
  position: "fixed",
  top: "0",
  height: "50px",
  width: "100%",
  zIndex: "1",
}));

export const CategoryButton = muistyled(
  Button,
  {}
)({
  width: "90px",
  height: "30px",
  border: "1px solid ",
  borderRadius: "5px",
  borderColor: theme.palette.primary.main,
  backgroundColor: "#fff",
  color: theme.palette.primary.main,
  fontSize: "13px",
  fontFamily: "Assistant",
  fontWeight: "bold",
  lineHeight: "1.1",
});
