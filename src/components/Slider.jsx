import React from "react";
import { Box } from "@mui/material";
import FeatureCard from "./FeatureCard";

// Importing images
import Decentralized from "./assets/images/cards/Decentralized.png";
import CensorshipResistant from "./assets/images/cards/Censorship Resistant.png";
import Web3Friendly from "./assets/images/cards/Web3 Friendly.png";
import FastScalable from "./assets/images/cards/Fast & scalable.png";
import TokenBasedEconomy from "./assets/images/cards/Token-based Economy.png";
import ProgrammableSpacesApps from "./assets/images/cards/Programmable Spaces & Apps.png";
import CompatibleFutureWeb from "./assets/images/cards/Compatible with the Future Web.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

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
    title: "Fast & scalable",
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

const Slider = () => {
  return (
    <Box sx={styles.sliderContainer}>
      <Swiper
        spaceBetween={2} // Reduced space between slides
        slidesPerView={3} // Show 3 cards at a time
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        style={styles.swiper}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} style={styles.swiperSlide}>
            <FeatureCard
              imageUrl={feature.imageUrl}
              title={feature.title}
              description={feature.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const styles = {
  sliderContainer: {
    width: "90%", // Increased width of the container to 90% of the page
    height: "60vh", // Set a fixed height for the container
    margin: "60px auto",
    position: "relative",
    "& .swiper-button-next, & .swiper-button-prev": {
      color: "#fff",
      top: "50%", // Adjust top position for more space
      fontSize: "18px", // Increase font size for better visibility
      zIndex: 1,
    },
    "& .swiper-pagination-bullet": {
      backgroundColor: "transparent",
      border: "1px solid white",
    },
    "& .swiper-pagination": {
      bottom: "20px", // Adjust bottom position for more space
    },
  },
  swiper: {
    width: "100%",
    height: "100%",
  },
  swiperSlide: {
    display: "flex",
    justifyContent: "center", // Center the cards
    padding: "0", // Remove padding to reduce space
  },
};

export default Slider;
