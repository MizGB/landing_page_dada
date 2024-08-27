import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";

export const MainCardContianer = styled(Grid)(({ theme }) => ({}));
export const BottomCardContainer = styled(Grid)(({ theme }) => ({
  height: "100%",
}));
export const TopCardContainer = styled(Grid)(({ theme }) => ({}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  width: 500,
  height: 600,
  maxHeight: 600,
  borderRadius: "15px",
  margin: theme.spacing(2),
}));

export const CardMediaWrapper = styled(Grid)(({ theme }) => ({}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 160,
  width: "100%",
  borderRadius: "20px",
}));

export const CardContenWrapper = styled(Grid)(({ theme, image }) => ({
  height: "100%",
  overflow: "hidden",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100px",
  height: "35px",
  color: "white",
  // backgroundColor: theme.palette.primary.main,
  borderColor: "#FBC02D",
  fontSize: "16px",
  borderRadius: 1,
  fontWeight: "bold",
  marginTop: theme.spacing(1),
}));
