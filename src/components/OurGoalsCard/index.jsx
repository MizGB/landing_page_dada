import React from "react";
import { Grid, Avatar, Typography, Box, Button } from "@mui/material";
import { MainCardContainer, StyledCard } from "./styledOurGoalsCard";

const ourGoals = [
  { id: "1", title: "Goal 1" },
  { id: "2", title: "Goal 2" },
  { id: "3", title: "Goal 3" },
];

const OurGoalsCard = () => {
  return (
    <MainCardContainer container>
      <StyledCard elevation={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4} // Adjust the spacing as needed
          sx={{ pt: 15 }}
        >
          {ourGoals.map((goal, i) => (
            <Grid
              item
              xs={12}
              sm={3} // Adjust the grid size based on the number of goals
              key={goal.id}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{
                    width: 80, // Set the size of the avatar
                    height: 80,
                    mb: 2, // Margin bottom for spacing between avatar and text
                  }}
                />
                <Typography variant="body1" color="initial">
                  {goal.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyledCard>
    </MainCardContainer>
  );
};

export default OurGoalsCard;
