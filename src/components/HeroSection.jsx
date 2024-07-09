import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import heroBackground from "./assets/images/Hero_Background.png";
import { ReactComponent as JoinIcon } from "./assets/images/JoinIcon.svg";
import { ReactComponent as MeetIcon } from "./assets/images/MeetIcon.svg";

const HeroSection = () => {
  const theme = useTheme();

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
        bgcolor: "transparent",
        position: "relative",
        [theme.breakpoints.down("md")]: {
          height: "50vh",
        },
        [theme.breakpoints.down("sm")]: {
          height: "30vh",
        },
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
          [theme.breakpoints.down("md")]: {
            height: "400px",
            width: "600px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "200px",
            width: "300px",
          },
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
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
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
              [theme.breakpoints.down("md")]: {
                fontSize: "34px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
              },
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
              [theme.breakpoints.down("md")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
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
              component="a"
              href="https://meet.im3.live"
              variant="contained"
              endIcon={<MeetIcon />}
              sx={{
                color: "white",
                bgcolor: "#B81843",
                borderRadius: "25px",
                padding: "10px 24px",
                fontFamily: "DM Sans",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "white",
                  color: "#B81843",
                },
                [theme.breakpoints.down("sm")]: {
                  padding: "6px 12px",
                },
              }}
            >
              Try IM3 Meet
            </Button>
            <Button
              component="a"
              href="https://x.com/IM3_live"
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
                "&:hover": {
                  bgcolor: "black",
                  color: "white",
                  border: "1px solid black",
                },
                [theme.breakpoints.down("sm")]: {
                  padding: "6px 12px",
                },
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
