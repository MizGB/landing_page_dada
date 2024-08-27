import React from "react";
import { CategoryButton } from "./StyledNavBar";
import { Link } from "react-router-dom";
import { Container, Grid, Button, Box, Avatar } from "@mui/material";
import theme from "../../theme";

function NavBar() {
  const navigationButtons = [
    {
      name: "navigation1",
    },
    {
      name: "navigation2",
    },
    {
      name: "navigation3",
    },
    {
      name: "navigation3",
    },
    {
      name: "navigation3",
    },
  ];
  return (
    <Box>
      <Grid
        container
        sx={{
          height: "60px",
          width: "100%",
          backgroundColor: "grey",
        }}
        dir={"rtl"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Button variant="outlined" sx={{ borderRadius: 10 }}>
          LogIn
        </Button>
        {navigationButtons.map((category, index) => (
          <Grid item sx={{ p: "5px" }} key={index}>
            <Link to="/" key={index} sx={{ textDecoration: "none" }}>
              <CategoryButton>{category.name}</CategoryButton>
            </Link>
          </Grid>
        ))}
        <Avatar />
      </Grid>
    </Box>
  );
}

export default NavBar;
