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
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navLinks = [
    {
        title: "profile",
        icon: <Face3Icon />,
        path: "/profile",
      },
    {
      title: "home",
      icon: <HomeIcon />,
      path: "/",
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
        title: "logout",
        icon: <LogoutIcon />,
        path: "/login",
      },
   
   
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed" sx={{bgcolor:'#e0e0e0'}}>
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
                  style={{ textDecoration: "none", color: "#2B4E72" }}
                >
                  {item.icon}
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
