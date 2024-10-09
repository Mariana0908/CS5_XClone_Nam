import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "@mui/material/Link";
import "./Login.css";

export function Login() {
  //capture data with useState and onchange event
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(userName);
  console.log(password);
  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <h1>Log In</h1>
          <TextField
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
            id="user_name"
            label="Username"
          />

          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            id="password"
            label="Password"
            type="password"
          />
          <div className="button-container">
            <Button variant="contained">
              <GoogleIcon />
            </Button>

            <Button variant="contained">Sing Up</Button>
          </div>

          <h3>Don´t have an account?</h3>

          <Link href="#" underline="hover">
            {"Log up"}
          </Link>
        </div>
      </div>

      <img src="./img/logo.jpg" className="logo" />
    </>
  );
}
