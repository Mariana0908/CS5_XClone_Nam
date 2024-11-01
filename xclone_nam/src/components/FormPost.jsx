import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import user from "../assets/images/user.png";
import Textarea from "@mui/joy/Textarea";

export const FormPost = () => {
  const [text, setText] = React.useState("");
  return (
    <Container sx={{ padding: 4, textAlign: "center" }}>
      <Grid>
        <CardHeader
          avatar={
            <Avatar
              alt="image profile"
              src={user}
              sx={{ width: 80, height: 80 }}
            />
          }
        />
      </Grid>
      <Grid>
        <Typography variant="h5" color="black">
          "What is happening?"
        </Typography>
      </Grid>
      <Textarea
        placeholder="Write here…"
        value={text}
        onChange={(event) => setText(event.target.value)}
        minRows={2}
        maxRows={4}
        endDecorator={
          <Typography level="body-xs" sx={{ ml: "auto" }}>
            {text.length} character(s)
          </Typography>
        }
        sx={{ minWidth: 300 }}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
        <Button variant="contained" sx={{ bgcolor: "#2790B0" }}>
          Post
        </Button>
      </Box>
    </Container>
  );
};
