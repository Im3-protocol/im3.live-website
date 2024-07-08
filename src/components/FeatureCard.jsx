import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const FeatureCard = ({ feature }) => {
  return (
    <Card
      sx={{
        width: 340, // width of the card
        height: 420, // fixed height of the card
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "rgba(255, 246, 246, 0.1)",
        backdropFilter: "blur(100px)",
        border: "1px solid rgba(255, 246, 246, 0.1)",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <CardMedia
        component="img"
        image={feature.imageUrl}
        alt={feature.title}
        sx={{
          objectFit: "cover",
          paddingTop: "10px",
          flexShrink: 0,
        }}
      />
      <CardContent
        sx={{
          color: "white",
          padding: "0 24px 24px 24px",
          textAlign: "left",
          boxSizing: "border-box",
          flexGrow: 1, // allow CardContent to grow and fill space
        }}
      >
        <Typography
          variant="h7"
          component="div"
          sx={{
            fontSize: "18px",
            // fontSize: "14px",
            fontFamily: "DM Sans Bold",
            // fontFamily: "PorterFT",
            paddingBottom: "8px",
          }} // space between title and description
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "DM Sans", color: "rgba(255, 246, 246, 0.6)" }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
