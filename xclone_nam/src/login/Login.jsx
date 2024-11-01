// Login.js
import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Link,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import logoLogin from "../assets/images/logoNameSlogan.png";
import { Context } from "../context/Context";

export function Login() {
  const [error, setError] = useState(false);
  const [errorAccount, setErrorAccount] = useState(false);
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    login,
    signUp,
    loginWithGoogle,
  } = useContext(Context);

  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);

    try {
      await login();
      navigate("/home"); //Redirects to home if login is successful
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrorAccount(true);
      navigate("/login"); // Redirects to error page if there is a failure
    }
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigate("/home");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          {errorAccount && (
            <Typography component="h4" variant="h4" gutterBottom color="red">
              Invalid Credentials
            </Typography>
          )}
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

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              color: "#2790B0",
            }}
          >
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
            >
              Google
            </Button>

            <Button variant="contained" onClick={handleLogin}>
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
