import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import liveStreamingIcon from "./assets/images/icons/Live Streaming and Events.png";
import educationIcon from "./assets/images/icons/Education and E-Learning.png";
import healthcareIcon from "./assets/images/icons/Healthcare and Wellness.png";
import communityIcon from "./assets/images/icons/Community and Social Interaction.png";
import corporateIcon from "./assets/images/icons/Corporate and Professional.png";
import gamingIcon from "./assets/images/icons/Entertainment and Gaming.png";
import artIcon from "./assets/images/icons/Art and Culture.png";
import aiNewsIcon from "./assets/images/icons/Decentralized:Conversational AI and News.png";
import realEstateIcon from "./assets/images/icons/Real Estate and Virtual Tours.png";

const useCasesData = [
  {
    title: "Live Streaming and Events",
    icon: liveStreamingIcon,
    items: [
      "Live Streaming",
      "Virtual Events",
      "Live Music Concerts/Metaverse Concerts",
      "Virtual DJ Sets and Parties",
      "Online Talent Shows/Metaverse Talent Shows",
      "Virtual Reality Experiences",
      "E-sports Live-streaming",
      "Online Gaming Tournaments",
      "Programmable Events/Spaces/Streamings",
    ],
  },
  {
    title: "Education and E-Learning",
    icon: educationIcon,
    items: [
      "Online Language Learning",
      "Online Coding Bootcamps",
      "Online Fitness Classes",
      "Token-gated Educational Webinars",
    ],
  },
  {
    title: "Healthcare and Wellness",
    icon: healthcareIcon,
    items: [
      "Telehealth and Remote Consultations",
      "Telemedicine Consultations",
      "Virtual Therapy Sessions",
    ],
  },
  {
    title: "Community and Social Interaction",
    icon: communityIcon,
    items: [
      "Community and Social Networks/SocialFi",
      "Decentralized Social Media",
      "Token-gated Fan Clubs",
      "Virtual NFT/DAO Clubs",
      "Token/NFT gated Online Workshops",
      "Token-gated Mastermind Groups",
    ],
  },
  {
    title: "Corporate and Professional",
    icon: corporateIcon,
    items: [
      "Video Conferencing",
      "Corporate Town Halls/AMAs",
      "Token/NFT-based Virtual Conferences/Spaces/AMAs",
      "Online Political/Web3 Projects Town Halls",
      "Token-gated Investment Seminars",
      "Online Parent-Teacher Meetings",
    ],
  },
  {
    title: "Entertainment and Gaming",
    icon: gamingIcon,
    items: [
      "Gaming/Web3 Gaming and Esports",
      "Online Gaming Tournaments",
      "Virtual Reality Experiences",
      "Real-time NFT Music Audio Experiences",
    ],
  },
  {
    title: "Art and Culture",
    icon: artIcon,
    items: [
      "Virtual Art Exhibitions",
      "Online Talent Shows/Metaverse Talent Shows",
      "Real-time NFT Music Audio Experiences",
    ],
  },
  {
    title: "Decentralized/Conversational AI and News",
    icon: aiNewsIcon,
    items: [
      "Decentralized/Conversational AI",
      "Decentralized News Broadcasting",
    ],
  },
  {
    title: "Real Estate and Virtual Tours",
    icon: realEstateIcon,
    items: ["Virtual Real Estate Tours"],
  },
];

const ListOfUseCases = () => (
  <Box
    sx={{
      bgcolor: "transparent",
      color: "white",
      p: 4,
      maxWidth: 1200,
      margin: "auto",
      borderRadius: 2,
    }}
  >
    <Grid container spacing={2}>
      {useCasesData.map((useCase, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
          <Box
            sx={{
              p: 2,
              border: "1px solid white",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              minHeight: 260,
              flex: 1,
              backgroundColor: "rgba(253, 253, 253, 0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                component="img"
                src={useCase.icon}
                alt={`${useCase.title} icon`}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Typography variant="h6" sx={{ fontFamily: "DM Sans" }}>
                {useCase.title}
              </Typography>
            </Box>
            <List sx={{ flex: 1, overflow: "auto", py: 0 }}>
              {useCase.items.map((item, idx) => (
                <ListItem key={idx} sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <CircleIcon sx={{ color: "#F5F5F5", fontSize: 10 }} />
                  </ListItemIcon>
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ListOfUseCases;
