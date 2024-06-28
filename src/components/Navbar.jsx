import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none", // Removes any shadow
        border: "none", // Ensures there is no border
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <Link href="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </Box>
        <Box>
          <Button
            href="#home"
            color="inherit"
            sx={{
              fontSize: "16px",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "#F0F0F2", // Change background color on hover
                color: "#01001E", // Change text color on hover
              },
            }}
          >
            Home
          </Button>
          <Button
            href="#home"
            color="inherit"
            sx={{
              fontSize: "16px",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "#F0F0F2", // Change background color on hover
                color: "#01001E", // Change text color on hover
              },
            }}
          >
            Team
          </Button>
          <Button
            href="#home"
            color="inherit"
            sx={{
              fontSize: "16px",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "#F0F0F2", // Change background color on hover
                color: "#01001E", // Change text color on hover
              },
            }}
          >
            Services
          </Button>
          <Button
            href="#about"
            color="inherit"
            sx={{
              fontSize: "16px",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "#F0F0F2", // Change background color on hover
                color: "#01001E", // Change text color on hover
              },
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
