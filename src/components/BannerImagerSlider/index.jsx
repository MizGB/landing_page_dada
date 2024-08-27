import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";

const images = [
  {
    id: "0",
    src: "https://images.pexels.com/photos/22708188/pexels-photo-22708188/free-photo-of-man-fishing-on-seashore-with-dog.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&dpr=1",
  },
  {
    id: "1",
    src: "https://images.pexels.com/photos/20522718/pexels-photo-20522718/free-photo-of-close-up-of-a-cactus-against-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&dpr=1",
  },
  {
    id: "2",
    src: "https://images.pexels.com/photos/20522124/pexels-photo-20522124/free-photo-of-whaleshead-beach-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&dpr=1",
  },
  {
    id: "3",
    src: "https://images.pexels.com/photos/21319259/pexels-photo-21319259/free-photo-of-landscape-of-zion-national-park-in-the-usa.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&dpr=1",
  },
];
function CustomSlide(props) {
  const { index, image, id, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <img
          src={image}
          alt={id}
          style={{ borderRadius: 15, width: "80%", height: "55rem" }}
        />
      </Grid>
    </div>
  );
}

const BannerImagerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    accessibility: false,
    // centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Grid container>
      <div
        className="slider-container"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Slider {...settings}>
          {images.map((image, i) => (
            <Grid
              container
              key={i}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CustomSlide image={image.src} id={image.id} />
            </Grid>
          ))}
        </Slider>
      </div>
    </Grid>
  );
};

export default BannerImagerSlider;
