import React from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import { Link } from "react-router-dom";
import BigBusinessCard from "../InstructorCard/index";

const SwipeableRow = styled("div")({
  display: "flex",
  overflowX: "auto",
  padding: "10px 0",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export default function SwipeableCardRow() {
  const cards = [
    {
      id: 1,
      title: "מתן ",
      content:
        "Lorem Ipsum is Lorem Ipsum is fmcv Lore Lorem Ipsum is Lore Lore Lore ",
      image:
        "https://images.pexels.com/photos/21319259/pexels-photo-21319259/free-photo-of-landscape-of-zion-national-park-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&dpr=1",
    },
    {
      id: 2,
      title: "אביהו",
      content:
        "Lorem Ipsum is Lorem Ipsum is fmcv Lore Lorem Ipsum is Lore Lore Lore ",
      image:
        "https://images.pexels.com/photos/21319259/pexels-photo-21319259/free-photo-of-landscape-of-zion-national-park-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&dpr=1",
    },
    {
      id: 3,
      title: "יוסי ",
      content:
        "Lorem Ipsum is Lorem Ipsum is fmcv Lore Lorem Ipsum is Lore Lore Lore ",
      image:
        "https://images.pexels.com/photos/21319259/pexels-photo-21319259/free-photo-of-landscape-of-zion-national-park-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&dpr=1",
    },
    {
      id: 4,
      title: " מנש",
      content:
        "Lorem Ipsum is Lorem Ipsum is fmcv Lore Lorem Ipsum is Lore Lore Lore ",
      image:
        "https://images.pexels.com/photos/21319259/pexels-photo-21319259/free-photo-of-landscape-of-zion-national-park-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&dpr=1",
    },
    {
      id: 5,
      title: " ישראל",
      content:
        "Lorem Ipsum is Lorem Ipsum is fmcv Lore Lorem Ipsum is Lore Lore Lore ",
      image:
        "https://images.pexels.com/photos/21319259/pexels-photo-21319259/free-photo-of-landscape-of-zion-national-park-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&dpr=1",
    },
  ];

  return (
    <>
      <Grid container sx={{ pt: 10 }}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            container
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ pl: "10px" }}
          >
            <Typography
              variant="h5"
              color={theme.palette.primary.main}
              fontWeight="bold"
              sx={{ pb: "10px", pr: "10px" }}
            >
              {"המדריכים שלנו"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <SwipeableRow container justifyContent="flex-start">
        {cards.map((card) => (
          <BigBusinessCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            content={card.content}
            link={card.link}
          />
        ))}
      </SwipeableRow>
    </>
  );
}
