import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "./assets/images/X.svg";
import TelegramIcon from "./assets/images/TelegramIcon.svg";
import MirrorIcon from "./assets/images/Mirror.svg";

function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        color: "white",
        padding: "60px 0",
      }}
    >
      {/* Gradient Line */}
      <Box
        sx={{
          width: "40%",
          height: "0.6px",
          backgroundImage:
            "linear-gradient(to right, #393939 1%, #FFFFFF 52%, #393939 100%)",
          marginBottom: 8,
        }}
      />

      {/* Logo */}
      <Box
        component="img"
        sx={{
          height: 60,
        }}
        src="./logo.svg"
        alt="Logo"
      />

      {/* Logotype */}
      <Typography variant="h5" sx={{ mt: 2, fontFamily: "PorterFT" }}>
        LOGOTYPE
      </Typography>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", mt: 2 }}>
        {[
          "Home",
          "Solutions",
          "Resources",
          "About Us",
          "Contact Us",
          "Services",
        ].map((text) => (
          <Button key={text} sx={{ color: "white", mx: 1 }}>
            {text}
          </Button>
        ))}
      </Box>

      {/* Follow Us Label */}
      <Typography variant="h6" sx={{ mt: 8, fontFamily: "PorterFT" }}>
        Follow us
      </Typography>
      <Box
        sx={{
          width: "10%",
          height: "0.9px",
          backgroundImage:
            "linear-gradient(to right, #393939 1%, #FFFFFF 52%, #393939 100%)",
          marginTop: 2,
          marginBottom: 4,
        }}
      />

      {/* Social Media Icons */}
      <Box sx={{ mt: 1, display: "flex" }}>
        <IconButton sx={{ color: "white", mx: 2 }}>
          <GitHubIcon sx={{ fontSize: 48 }} />
        </IconButton>
        <IconButton sx={{ color: "white", mx: 2 }}>
          <img src={XIcon} alt="X Icon" style={{ width: 48, height: 48 }} />
        </IconButton>
        <IconButton sx={{ color: "white", mx: 2 }}>
          <YouTubeIcon sx={{ fontSize: 48 }} />
        </IconButton>
        <IconButton sx={{ color: "white", mx: 2 }}>
          <img
            src={TelegramIcon}
            alt="Telegram Icon"
            style={{ width: 48, height: 48 }}
          />
        </IconButton>
        <IconButton sx={{ color: "white", mx: 2 }}>
          <img
            src={MirrorIcon}
            alt="Mirror Icon"
            style={{ width: 48, height: 48 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
