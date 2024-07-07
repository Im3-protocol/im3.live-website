import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IM3Image from "./assets/images/IM3.png";
import bulletIcon from "./assets/images/BulletIcon.png"; // Ensure this path is correct

const IntroPart = forwardRef((props, ref) => (
  <Box
    ref={ref}
    sx={{
      bgcolor: "transparent",
      color: "#fff",
      width: "90%",
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      marginTop: "110px",
    }}
    mb={4}
  >
    <Grid container spacing={2} sx={{ width: "100%", maxWidth: 960 }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
            height: "100%", // Takes full height of the grid item
          }}
        >
          <img
            src={IM3Image}
            alt="IM3 Network"
            style={{ width: "100%", height: "auto", maxWidth: "300px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: "PorterFT" }}>
          What is IM3?
        </Typography>
        <Typography sx={{ fontFamily: "DMSans-Regular" }}>
          IM3 is a public and decentralized network designed for real-time
          content delivery, including voice and video streaming. It operates
          through a collaborative network of nodes that manage a Content
          Delivery Network (CDN), ensuring a secure, open, and public
          infrastructure for real-time content distribution.
        </Typography>
        <Typography mt={2} sx={{ fontFamily: "DMSans-Regular" }}>
          In the context of digital communication platforms, IM3 is to Google
          Meet/Zoom what Bitcoin and other digital currencies are to traditional
          fiat money tools like PayPal.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: "80%", mx: "auto", textAlign: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "PorterFT",
              margin: "120px 0 50px 0",
            }}
          >
            Why Do We Need IM3?
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            {[
              "The Web3 community and decentralized maxis currently do not have a public, secure, and permissionless solution for real-time communication. It's time to change that.",
              "As we approach an AI-driven future, the web is expected to shift from text to voice and video applications. A secure, open, and permissionless protocol will be crucial for a better internet and a free world.",
              <Typography component="span" key="market-value">
                By 2032, the global live streaming market is projected to be
                valued at{" "}
                <Typography
                  component="a"
                  href="https://www.custommarketinsights.com/report/live-streaming-market/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  USD 256.56 billion
                </Typography>
                .
              </Typography>,
              "Now is an opportune time for the crypto and Web3 community to attack this market.",
              <Typography component="span" key="big-brother">
                Security and data privacy are critical in communications, and we
                are cognizant of the security issues associated with closed
                platforms controlled by{" "}
                <Typography
                  component="a"
                  href="https://en.wikipedia.org/wiki/Big_Brother_(Nineteen_Eighty-Four)"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Big Brothers
                </Typography>
                .
              </Typography>,
              "Advancements in 5G internet and hardware and software, in accordance with Moore's Law, enable the public to perform many functions that, until now, only well-resourced companies could manage.",
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={bulletIcon}
                  alt="Bullet"
                  style={{
                    width: "20px",
                    marginRight: "8px",
                    alignSelf: "flex-start",
                  }}
                />
                {text}
              </div>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
));

export default IntroPart;
