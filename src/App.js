import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroPart from "./components/IntroPart";
import ListOfUseCases from "./components/ListOfUseCases";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import Background from "./components/assets/images/background.png";
import Slider from "./components/Slider";

const App = () => {
  const introPartRef = useRef(null);
  const footerRef = useRef(null); // Create a ref for the Footer

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#01001E",
        color: "white",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Navbar scrollToRef={{ intro: introPartRef, footer: footerRef }} />
        <HeroSection />
        <Slider />
        <IntroPart ref={introPartRef} />
        <ListOfUseCases />
        <Roadmap />
        <Footer ref={footerRef} />
      </Box>
    </Box>
  );
};

export default App;
