import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Face3Icon from "@mui/icons-material/Face3";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export const NavBar = () => {
  const navigate = useNavigate();
  const {user: userName} = useContext(Context);

  const navLinks = [
    {
      title: "profile",
      icon: <Face3Icon />,
      path: "/profile",
    },
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
      title: "logout",
      icon: (
        <LogoutIcon
          onClick={() => {
            navigate("/login");
            window.location.reload();
          }}
        />
      ),
      path: "/login",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#e0e0e0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <Typography sx={{ color: "#2B4E72" }}>
            Hello, {userName.name !== undefined && userName.name !== "" ? userName.name : userName.displayName || userName.userName}!
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {/* navlinks is passed as a prop for NavlistDrawer */}
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};