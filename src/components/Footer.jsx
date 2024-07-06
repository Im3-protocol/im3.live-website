import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "./assets/images/X.svg";
import TelegramIcon from "./assets/images/TelegramIcon.svg";
import MirrorIcon from "./assets/images/Mirror.svg";

const Footer = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
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
    <Box component="img" src="./logo1.svg" alt="Logo" />

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
      <Link
        href="https://github.com/Im3-protocol"
        target="_blank"
        rel="noopener"
      >
        <IconButton sx={{ color: "white", mx: 2 }}>
          <GitHubIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Link>
      <Link href="https://x.com/IM3_live" target="_blank" rel="noopener">
        <IconButton sx={{ color: "white", mx: 2 }}>
          <img src={XIcon} alt="X Icon" style={{ width: 32, height: 32 }} />
        </IconButton>
      </Link>
      <Link
        href="https://www.youtube.com/@IM3Live"
        target="_blank"
        rel="noopener"
      >
        <IconButton sx={{ color: "white", mx: 2 }}>
          <YouTubeIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Link>
      {/* <Link href="https://t.me/IM3Live" target="_blank" rel="noopener">
        <IconButton sx={{ color: "white", mx: 2 }}>
          <img
            src={TelegramIcon}
            alt="Telegram Icon"
            style={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Link> */}
      <Link href="https://mirror.xyz/IM3Live" target="_blank" rel="noopener">
        <IconButton sx={{ color: "white", mx: 2 }}>
          <img
            src={MirrorIcon}
            alt="Mirror Icon"
            style={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Link>
    </Box>
  </Box>
));

export default Footer;
