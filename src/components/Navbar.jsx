import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  marginRight: theme.spacing(2),
  position: "relative",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -6,
    width: "100%",
    height: "2px",
    backgroundColor: "#FFFFFF",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

const Navbar = ({ scrollToRef }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none",
        border: "none",
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
          <img src="/logo1.svg" alt="Logo" />
        </Box>
        <Hidden mdDown>
          <Box>
            <CustomButton href="#home" color="inherit">
              Home
            </CustomButton>
            <CustomButton
              onClick={() => handleScrollToSection(scrollToRef.intro)}
              color="inherit"
            >
              About
            </CustomButton>
            <CustomButton
              href="mailto:IM3.Live.contact@gmail.com"
              color="inherit"
            >
              Contact Us
            </CustomButton>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ width: 250 }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button component="a" href="#home">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleScrollToSection(scrollToRef.intro)}
            >
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleScrollToSection(scrollToRef.footer)}
            >
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
