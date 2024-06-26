import React from "react";
import Box from "@mui/material/Box";
import HeroSection from "./HeroSection";
import IntroPart from "./IntroPart";
import ListOfUseCases from "./ListOfUseCases";
import Slider from "./Slider";
import Roadmap from "./Roadmap";

const Main = () => {
  return (
    <Box sx={{ backgroundColor: "#01001E", color: "white" }}>
      <HeroSection />
      <Slider />
      <IntroPart />
      <ListOfUseCases />
      <Roadmap />
    </Box>
  );
};

export default Main;
