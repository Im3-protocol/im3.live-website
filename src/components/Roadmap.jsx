import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled, useTheme, useMediaQuery } from "@mui/system";

const roadmapItems = [
  { title: "IM3 Node MVP", status: "DONE" },
  { title: "IM3 Meet", status: "IN PROGRESS" },
  { title: "Web3 Identity Integration", status: "NOT STARTED" },
  { title: "IM3 Private Network (Team Nodes)", status: "NOT STARTED" },
  {
    title: "Recording and Integrating with Web3 Storages",
    status: "NOT STARTED",
  },
  { title: "IM3 POA Network (Team nodes + Partners)", status: "NOT STARTED" },
  { title: "Node Drop", status: "NOT STARTED" },
  { title: "IM3 Token Launch", status: "NOT STARTED" },
  { title: "IM3 Public Network Launch", status: "NOT STARTED" },
];

const ColorCircle = styled("span")(({ theme, status }) => ({
  height: "15px",
  width: "15px",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: theme.spacing(1),
  backgroundColor:
    status === "DONE" ? "green" : status === "IN PROGRESS" ? "orange" : "grey",
}));

const Roadmap = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        color: "#fff",
        p: 2,
        borderRadius: 1,
        margin: isSmallScreen ? 2 : 8,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontFamily: "PorterFT",
          textAlign: isSmallScreen ? "center" : "left",
          paddingBottom: "32px",
        }}
      >
        Road Map
      </Typography>
      <Grid container spacing={2}>
        {roadmapItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ColorCircle status={item.status} />
              <Typography sx={{ fontFamily: "DMSans-Medium" }}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 2,
          paddingTop: "32px",
        }}
      >
        {["NOT STARTED", "DONE", "IN PROGRESS"].map((status, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", ml: 2, mb: 1 }}
          >
            <ColorCircle status={status} />
            <Typography
              sx={{
                fontFamily: "DMSans-Medium",
                textAlign: isSmallScreen ? "left" : "left",
              }}
            >
              {status}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Roadmap;
