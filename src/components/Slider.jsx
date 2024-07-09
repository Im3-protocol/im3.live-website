import React, { useState, useEffect } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FeatureCard from "./FeatureCard";

// Importing images
import Decentralized from "./assets/images/cards/Decentralized.png";
import CensorshipResistant from "./assets/images/cards/Censorship Resistant.png";
import Web3Friendly from "./assets/images/cards/Web3 Friendly.png";
import FastScalable from "./assets/images/cards/Fast & scalable.png";
import TokenBasedEconomy from "./assets/images/cards/Token-based Economy.png";
import ProgrammableSpacesApps from "./assets/images/cards/Programmable Spaces & Apps.png";
import CompatibleFutureWeb from "./assets/images/cards/Compatible with the Future Web.png";

const features = [
  {
    title: "Decentralized",
    description:
      "IM3 is a public and decentralized network. Run a node; join the revolution.",
    imageUrl: Decentralized,
  },
  {
    title: "Censorship Resistant",
    description:
      "No party can prevent anyone from participating in or using the network.",
    imageUrl: CensorshipResistant,
  },
  {
    title: "Web3 Friendly",
    description:
      "Easily integrates with blockchains, NFTs, POAPs, decentralized AIs, and more.",
    imageUrl: Web3Friendly,
  },
  {
    title: "Fast & Scalable",
    description:
      "The power of a Decentralized Network (dCDN) surpasses that of centralized and cloud alternatives.",
    imageUrl: FastScalable,
  },
  {
    title: "Token-based Economy",
    description:
      "The $IM3 token incentivizes node operators and is used as the currency within the entire IM3 ecosystem.",
    imageUrl: TokenBasedEconomy,
  },
  {
    title: "Programmable Spaces & Apps",
    description:
      "Harness the potential of smart contracts and a programmable network to develop permissionless applications with unparalleled autonomy and innovation.",
    imageUrl: ProgrammableSpacesApps,
  },
  {
    title: "Compatible with the Future Web",
    description:
      "In a 5G-powered internet era, the web will transcend text-based interactions. A free and progressive internet requires a platform like IM3, built for the next generation of connectivity.",
    imageUrl: CompatibleFutureWeb,
  },
];

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const isDesktop = useMediaQuery("(min-width:901px)");

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const slidePadding = isMobile ? 0.5 : isTablet ? 1 : 6; // Custom padding based on device type

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, features.length - slidesToShow)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= features.length - slidesToShow;

  // useEffect(() => {
  //   const autoplay = setInterval(() => {
  //     handleNext();
  //   }, 3000);
  //   return () => clearInterval(autoplay);
  // }, [currentIndex, slidesToShow]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "90%",
        overflow: "hidden",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "60px auto",
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 0,
          transform: "translateY(-50%)",
          top: "50%",
          zIndex: 10,
          color: "white",
          opacity: isPrevDisabled ? 0.5 : 1,
          cursor: isPrevDisabled ? "not-allowed" : "pointer",
        }}
        aria-label="Previous"
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        display="flex"
        sx={{
          width: "100%",
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 ${100 / slidesToShow}%`,
              px: slidePadding, // Use dynamic padding
              boxSizing: "border-box",
            }}
          >
            <FeatureCard feature={feature} />
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 0,
          transform: "translateY(-50%)",
          top: "50%",
          zIndex: 10,
          color: "white",
          opacity: isNextDisabled ? 0.5 : 1,
          cursor: isNextDisabled ? "not-allowed" : "pointer",
        }}
        aria-label="Next"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default FeatureSlider;
