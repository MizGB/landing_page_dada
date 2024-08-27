import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  SectionContainer,
  SectionText,
  TextWrapper,
  Title,
} from "./styledFirstSection";
import { tyopgraphyStyles, titleStyle } from "./styledFirstSection";

function FirstSection() {
  return (
    <SectionContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TextWrapper
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
      >
        <SectionText container item justifyContent="center" alignItems="center">
          {/* <Title container justifyContent="center" alignItems="center">
            <Typography sx={titleStyle} dir={"rtl"}>
              Welcome To My World
            </Typography>
          </Title> */}
          <Grid item container justifyContent="center" alignItems="center">
            <Typography sx={tyopgraphyStyles} dir={"rtl"}>
              ברוכים הבאים !
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <Typography sx={tyopgraphyStyles} dir={"rtl"}>
              כאן ניתן לקבל מידע על כל הפעילות שלנו
            </Typography>
          </Grid>
        </SectionText>
      </TextWrapper>
    </SectionContainer>
  );
}

export default FirstSection;
