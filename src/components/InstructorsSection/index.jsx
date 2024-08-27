import React from "react";
import Grid from "@mui/material/Grid";
import SwipeableCardRow from "../SwipeableCardRow";
import CustomImageSlider from "../CustomImageSlider";

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
const InstructorsSection = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100%", pt: 10 }}>
      <CustomImageSlider cards={cards} />
    </Grid>
  );
};

export default InstructorsSection;
