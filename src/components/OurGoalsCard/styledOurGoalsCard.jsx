import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

export const MainCardContainer = styled(Grid)(({ theme }) => ({
  height: "500px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "60%",
  height: "80%",
  borderRadius: 10,
}));
