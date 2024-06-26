import React from "react";
import FeatureCard from "./FeatureCard";

const Slider = () => {
  return (
    <div style={styles.sliderContainer}>
      <FeatureCard
        imageUrl="./assets/images/Decentralized.png"
        title="Feature 1"
        description="This is a description for feature 1."
      />
      <div style={{ width: "55px" }} />
      <FeatureCard
        imageUrl="./assets/images/Censorship Resistant.png"
        title="Feature 2"
        description="This is a description for feature 2."
      />
      <div style={{ width: "55px" }} />
      <FeatureCard
        imageUrl="./assets/images/Web3 Friendly.png"
        title="Feature 3"
        description="This is a description for feature 3."
      />
    </div>
  );
};

const styles = {
  sliderContainer: {
    display: "flex",
    justifyContent: "center",
    width: "1220px",
    height: "436px",
    margin: "0 auto",
    position: "relative",
    boxSizing: "border-box",
  },
};

export default Slider;
