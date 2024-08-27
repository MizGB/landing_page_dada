import React from "react";
import { Typography, Grid } from "@mui/material";

import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  BottomCardContainer,
  TopCardContainer,
  CardMediaWrapper,
  CardContenWrapper,
  MainCardContianer,
} from "./styledInstructorCard";
const InstructorCard = ({ id, title, image, link, content }) => {
  return (
    <StyledCard elevation={5}>
      <Grid container sx={{ height: "100%", maxHeight: "400px" }}>
        <CardContenWrapper item xs={12} sx={{ height: "100%" }}>
          <StyledCardContent>
            <TopCardContainer
              item
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%", height: "100%", pb: 2 }}
            >
              <CardMediaWrapper
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ height: "100%", pr: 1 }}
              >
                <StyledCardMedia
                  image={
                    image
                    // "https://plus.unsplash.com/premium_photo-1722254420199-da4cba75fd2e?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  title={title}
                />
              </CardMediaWrapper>
            </TopCardContainer>
            <BottomCardContainer
              container
              dir={"rtl"}
              // direction={"column"}
              sx={{ height: "60px" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
              spacing={1}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h9"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sx={{ overflow: "hidden" }}
                dir={"rtl"}
              >
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="typography"
                  textAlign={"start"}
                  sx={{
                    display: "-webkit-box",
                    // WebkitBoxOrient: "vertical",
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                    WebkitLineClamp: 2,
                    lineClamp: 2,
                  }}
                >
                  {content}
                </Typography>
              </Grid>
            </BottomCardContainer>
          </StyledCardContent>
        </CardContenWrapper>
      </Grid>
    </StyledCard>
  );
};

export default InstructorCard;
