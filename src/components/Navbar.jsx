import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home"; // Example SVG icon
import InfoIcon from "@mui/icons-material/Info"; // Example SVG icon
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Example SVG icon
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
      <Toolbar
        sx={{
          minHeight: { xs: 56, sm: 64 },
          alignItems: "center",
          padding: "0 8px",
        }}
      >
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
            sx={{
              color: "white",
              opacity: 0.7,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          ".MuiDrawer-paper": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(80px)",
            color: "white",
            // height: "auto",
            // maxHeight: "70vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "Top",
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List sx={{ padding: 0 }}>
            <ListItem
              button
              component="a"
              href="#home"
              sx={{ minHeight: 40, padding: "10px 16px" }}
            >
              <ListItemIcon sx={{ color: "white", opacity: 0.7, minWidth: 40 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontFamily: "DM Sans", fontSize: "0.875rem" }}
                  >
                    Home
                  </Typography>
                }
              />
            </ListItem>
            <ListItem
              button
              onClick={() => handleScrollToSection(scrollToRef.intro)}
              sx={{ minHeight: 40, padding: "10px 16px" }}
            >
              <ListItemIcon sx={{ color: "white", opacity: 0.7, minWidth: 40 }}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontFamily: "DM Sans", fontSize: "0.875rem" }}
                  >
                    About
                  </Typography>
                }
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="mailto:IM3.Live.contact@gmail.com"
              sx={{ minHeight: 40, padding: "10px 16px" }}
            >
              <ListItemIcon sx={{ color: "white", opacity: 0.7, minWidth: 40 }}>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontFamily: "DM Sans", fontSize: "0.875rem" }}
                  >
                    Contact Us
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
