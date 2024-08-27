import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import BigBusinessCard from "../InstructorCard";

function CustomSlide({ card }) {
  const { index, image, id, title, content, link, ...otherProps } = card;
  return (
    <div
      {...otherProps}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "700px" }}
      >
        <BigBusinessCard
          id={id}
          image={image}
          title={title}
          content={content}
          link={link}
        />
      </Grid>
    </div>
  );
}

const CustomImageSlider = ({ cards }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div
      className="slider-container"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Slider {...settings}>
        {cards.map((card, i) => (
          <Grid
            container
            key={i}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CustomSlide card={card} id={card.id} />
          </Grid>
        ))}
      </Slider>
    </div>
  );
};

export default CustomImageSlider;
