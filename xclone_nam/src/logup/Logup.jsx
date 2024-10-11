import React, { useState } from "react";
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
import logoLogin from "../assets/images/logoNameSlogan.png"; // Asegúrate de que la ruta de la imagen sea correcta

export function Logup() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Side for Image */}
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
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>

      {/* Right Side for Form */}
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
            Create your Account
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />

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
            label="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" startIcon={<GoogleIcon />}>
              Google
            </Button>

            <Button variant="contained">Sign Up</Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3 }}>
            Already have an account? <Link href="/login">Log In</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
