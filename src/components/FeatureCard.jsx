import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const FeatureCard = ({ imageUrl, title, description }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={styles.image}
      />
      <CardContent sx={styles.textContainer}>
        <Typography variant="h6" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: 340,
    height: 420,
    backgroundColor: "rgba(255, 246, 246, 0.1)",
    backdropFilter: "blur(100px)",
    border: "1px solid rgba(240, 240, 242, 0.5)",
    borderRadius: 3,
    margin: "auto",
    padding: 0,
    boxSizing: "border-box",
    mt: "10px",
  },
  image: {
    width: "100%",
    maxHeight: 160,
    objectFit: "cover",
    borderRadius: 2,
    marginBottom: 0,
    marginTop: "20px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "35px",
  },
  title: {
    fontFamily: "PorterFT, Arial, sans-serif",
    fontSize: 16,
    margin: "5px 0 2px 0",
    color: "white",
  },
  description: {
    fontFamily: "DM Sans, Arial, sans-serif",
    margin: "2px 0",
    color: "white",
  },
};

export default FeatureCard;
