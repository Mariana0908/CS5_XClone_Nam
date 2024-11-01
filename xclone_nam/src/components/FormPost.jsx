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
import { context } from "../context/Context";

export const FormPost = () => {
  const [text, setText] = React.useState("");
  const {post, setPost, user: userName, setUser} = React.useContext(context);
console.log(post)

const addNewPost = () => {
  setPost([...post, {userId: 0,
    img: user,
    
    name: "Aleandra Navarro",
    userName: userName,
    isFollowing: false,
    postId: post.length+1,
    date: "15/05/24",
    hour: "5:20 pm",
    bodyPost: text,
    likeCount: 0,
    savePost: true, //this is state for save post
    }]);
  setText("");
}

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
        <Button onClick={addNewPost} variant="contained" sx={{ bgcolor: "#2790B0" }}>
          Post
        </Button>
      </Box>
    </Container>
  );
};
