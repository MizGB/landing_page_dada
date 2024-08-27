import "./App.css";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar/index";
import FirstSection from "./components/FirstSection/index";
import BannerImagerSlider from "./components/BannerImagerSlider/index";
import InstructorsSection from "./components/InstructorsSection";
import OurGoalsSection from "./components/OurGoalsSection";

function App() {
  return (
    <Grid container direction="column">
      <NavBar />
      <FirstSection />
      <BannerImagerSlider />
      <OurGoalsSection />
      <InstructorsSection />
    </Grid>
  );
}

export default App;
