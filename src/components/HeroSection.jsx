import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import heroBackground from "./assets/images/Hero_Background.png";
import { ReactComponent as JoinIcon } from "./assets/images/JoinIcon.svg";
import { ReactComponent as MeetIcon } from "./assets/images/MeetIcon.svg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        bgcolor: "#01001E",
        position: "relative",
        bgcolor: "transparent",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "773px",
          width: "1057px",
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "802px",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{
              mb: 2,
              fontSize: "48px",
              fontFamily: "PorterFT",
              color: "#F0F0F2",
            }}
          >
            Decentralized and Public
            <br />
            Real-time&nbsp;Cloud
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              mb: 2,
              fontSize: "20px",
              lineHeight: 1.5,
              fontFamily: "DM Sans Bold",
              color: "#F0F0F2",
            }}
          >
            IM3 is the Web3 Evolution of Real-Time Cloud
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              mb: 4,
              fontSize: "20px",
              lineHeight: 1.5,
              fontFamily: "DMSans-Light",
              color: "#F0F0F2",
            }}
          >
            Revolutionizing the creation and expansion of voice, video
            applications, and Conversational AI
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              endIcon={<MeetIcon />}
              sx={{
                color: "white",
                bgcolor: "#B81843",
                borderRadius: "25px",
                padding: "10px 24px",
                fontFamily: "DM Sans",
                textTransform: "none",
              }}
            >
              Try IM3 Meet
            </Button>
            <Button
              variant="outlined"
              endIcon={<JoinIcon />}
              sx={{
                color: "black",
                bgcolor: "white",
                border: "1px solid white",
                borderRadius: "25px",
                padding: "10px 24px",
                fontFamily: "DM Sans",
                textTransform: "none",
              }}
            >
              Join US
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
