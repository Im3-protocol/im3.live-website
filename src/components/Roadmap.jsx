import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

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

const Roadmap = () => (
  <Box
    sx={{
      bgcolor: "transparent",
      color: "#fff",
      p: 2,
      borderRadius: 1,
      margin: "80px",
    }}
  >
    <Typography variant="h4" sx={{ mb: 2, fontFamily: "PorterFT" }}>
      Road Map
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {roadmapItems.slice(0, 5).map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <ColorCircle status={item.status} />
            <Typography sx={{ fontFamily: "DMSans-Medium" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        {roadmapItems.slice(5, 9).map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <ColorCircle status={item.status} />
            <Typography sx={{ fontFamily: "DMSans-Medium" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 2,
          }}
        >
          {["NOT STARTED", "DONE", "IN PROGRESS"].map((status, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", ml: 2 }}
            >
              <ColorCircle status={status} />
              <Typography sx={{ fontFamily: "DMSans-Medium" }}>
                {status}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Roadmap;
