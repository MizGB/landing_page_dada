import muistyled from "@emotion/styled";
import { Grid } from "@mui/material";
// import BGImg1 from "../images/img1.jpg";
// import { FocusIn } from "../../animations/animations";

export const SectionContainer = muistyled(Grid, {
  name: "SectionContainer",
})({
  height: "830px",
  // backgroundImage: `url(${BGImg1})`,
  backgroundSize: "100% 100%",
});
export const TextWrapper = muistyled(Grid, {
  name: "TextWrapper",
})({
  height: "70%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  // animation: `${FocusIn} 2s both `,
});

export const Title = muistyled(Grid, {
  name: "Title",
})({});

export const SectionText = muistyled(Grid, {
  name: "SectionText",
})({
  color: "#fff",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "250px",
});

export const tyopgraphyStyles = {
  color: "#809A6F",
  fontFamily: "Oswald",
  fontSize: "2.5rem",
  fontWeight: "bold",
};

export const titleStyle = {
  color: "#fff",
  fontFamily: "Oswald",
  fontSize: "1.0rem",
  fontWeight: "bold",
};
