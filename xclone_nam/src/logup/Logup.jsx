import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "@mui/material/Link";

export function Logup() {
const[name, setName]=useState(""); 
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const[email,setEmail]=useState("");
  console.log(userName);
  console.log(password);
  console.log(name);
  console.log(email);
  return (
    <>
    <h1>Create your Account</h1>
      <TextField
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
        id="name"
        label="Name"
      />
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
          setEmail(e.target.value);
        }}
        required
        id="email"
        label="Email"
        type="email"
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

      <Button variant="contained">
        <GoogleIcon />
      </Button>

      <Button variant="contained">Sing Up</Button>

      <h3>Already have an account?</h3>

      <Link href="/login" underline="hover">
        {"Log In"}
      </Link>
    </>
  );
}
