import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';
import Link from '@mui/material/Link';

export function Login() {
  //capture data with useState and onchange event
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(userName);
  console.log(password);
  return (
    <>
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

      <Button variant="contained">Sing Up</Button>

      <Button variant="contained"><GoogleIcon/></Button>
      
      <Link href="#" underline="hover">
        {'Log up'}
      </Link>
    </>
  );
}
