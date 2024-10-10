import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Face3Icon from "@mui/icons-material/Face3";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navLinks = [
    {
      title: "home",
      icon: <HomeIcon />,
      path: "/home",
    },
    {
      title: "Notifications",
      icon: <NotificationsIcon />,
      path: "/notification",
    },
    {
      title: "Messages",
      icon: <LocalPostOfficeIcon />,
      path: "/messages",
    },
    {
      title: "profile",
      icon: <Face3Icon />,
      path: "/profile",
    },
    {
      title: "login",
      icon: <LoginIcon />,
      path: "/",
    },
    {
      title: "logup",
      icon: <AppRegistrationSharpIcon/>,
      path: "/logup",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Button
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <IconButton color="white">
              <MenuIcon />
            </IconButton>
          </Button>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button variant="text" key={item.title}>
                <NavLink
                  to={item.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {item.title}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {/* navlinks se pasa como prop para NavlistDrawer */}
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
