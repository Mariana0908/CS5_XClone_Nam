import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Link,
  Grid2 as Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import logoLogin from "../assets/images/logoNameSlogan.png";
import { context } from "../context/Context";

export function Login({ setLogged }) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {user: userName, setUser: setUserName, password, setPassword} = useContext(context);
  
  const isError = () => {
    if (userName === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);
    setLogged(true);
    navigate("/home");
  };

  console.log(userName)

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Side for  Form */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Box sx={{ width: "80%", maxWidth: 400 }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Log In
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              color: "#2790B0",
            }}
          >
            <Button variant="contained" startIcon={<GoogleIcon />}>
              Google
            </Button>

            <Button variant="contained" onClick={isError}>
              Sign In
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3 }}>
            Don’t have an account? <Link href="/logup">Sign up</Link>
          </Typography>

          {error && (
            <Typography color="error">All fields are required</Typography>
          )}
        </Box>
      </Grid>

      {/* Right Side for Image */}
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoLogin}
          alt="Login logo"
          style={{ background: "#f0f0f0", width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
