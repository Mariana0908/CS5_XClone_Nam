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
import { Context } from "../context/Context";
import { addPost } from "../utils/utilPosts";
import Swal from "sweetalert2";

export const FormPost = () => {
  const [text, setText] = React.useState("");
  const { post, setPost, user: userName } = React.useContext(Context);

  console.log(userName);
  const addNewPost = async () => {
    const newPost = {
      body: text,
      name: userName.name || "",
      userName: userName.userName || "",
      userId: userName.id || userName.uid || userName.userId,
    };
    try {
      const postResult = await addPost(newPost);
      // Actualiza el estado del post después de crear el nuevo post exitosamente
      setPost([
        {
          userId: userName.userId,
          name: userName.name,
          userName: userName.userName,
          id: postResult,
          hourAndDate: new Date(),
          body: text,
        },
        ...post, // Esto coloca el nuevo post al principio
      ]);

      setText(""); // Limpia el campo de texto después de crear el post

      // Muestra el popup de éxito
      Swal.fire({
        icon: "success",
        title: "Post created successfully",
        text: "Your post has been published successfully",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
    }
  };

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
        onChange={(event) => {
          // text.length should be less or equal to 280
          if (event.target.value.length <= 280) {
            setText(event.target.value);
          } else {
            Swal.fire({
              icon: "warning",
              title: "Text too long",
              text: "Maximum 280 characters allowed.",
              confirmButtonText: "OK",
            });
            setText(event.target.value.slice(0, 280));
          }
        }}
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
        <Button
          onClick={addNewPost}
          variant="contained"
          sx={{ bgcolor: "#2790B0" }}
        >
          Post
        </Button>
      </Box>
    </Container>
  );
};
