import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
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
  textTransform: "none", // Added this line
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

const CustomListItem = styled(ListItem)(({ theme }) => ({
  textTransform: "none", // Added this line
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <CustomButton href="#home" color="inherit">
        Home
      </CustomButton>
      <CustomButton href="#about" color="inherit">
        About
      </CustomButton>
      <CustomButton href="#contactus" color="inherit">
        Contact Us
      </CustomButton>
    </>
  );

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
          <Link href="/">
            <img src="/logo1.svg" alt="Logo" />
          </Link>
        </Box>
        <Hidden mdDown>
          <Box>{menuItems}</Box>
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
            <CustomListItem button component="a" href="#home">
              <ListItemText primary="Home" />
            </CustomListItem>
            <CustomListItem button component="a" href="#about">
              <ListItemText primary="About" />
            </CustomListItem>
            <CustomListItem button component="a" href="#contactus">
              <ListItemText primary="Contact Us" />
            </CustomListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
