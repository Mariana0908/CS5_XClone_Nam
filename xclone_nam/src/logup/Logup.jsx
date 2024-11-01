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
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import logoLogin from "../assets/images/logoNameSlogan.png"; // Make sure that the image path is correct.

export function Logup() {
  const [name, setName] = useState("");
  const [errorAccount, setErrorAccount] = useState(false);
  const {
    signUp,
    loginWithGoogle,
    setEmail,
    setPassword,
    setUserName,
    email,
    password,
    userName,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUp();
      navigate("/home"); //Redirects to home page after registration
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrorAccount(true);
      navigate("/logup"); // Redirects to the error page if there is a failure.
    }
  };

  const handleGoogleSignUp = async () => {
    await loginWithGoogle();
    navigate("/home"); //Redirects to home page after registration with Google
  };

  const isButtonSignInDisabled =
    email === "" || password === "" || userName === "" || name === "";

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          {errorAccount && (
            <Typography variant="h5" color="red">
              User Already Registered
            </Typography>
          )}
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
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignUp}
            >
              Google
            </Button>
            <Button
              disabled={isButtonSignInDisabled}
              variant="contained"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3 }}>
            Already have an account? <Link href="/login">Log In</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
