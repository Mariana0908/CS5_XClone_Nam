import { Grid2 as Grid, Typography } from "@mui/material";
import { Post } from "../views/profile/Post";
import ButtonPost from "../components/ButtonPost";
import { FormPost } from "../components/FormPost";

import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { fetchPosts } from "../utils/utilPosts";
// import { addDocuments } from "../utils/utilPopulateUserCollection";

export const HomePage = () => {
  const { post, setPost } = useContext(Context);

  useEffect(() => {
    // Llama a `fetchPosts` y pasa un callback que actualizará el estado `post`
    fetchPosts((fetchedPosts) => {
      setPost(fetchedPosts);
    });
    // addDocuments();
  }, [setPost]);

  return (
    <Grid
      container
      direction="column" // verticalmente
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 10 }}
    >      
      <Grid item>
        <FormPost post={post} />
      </Grid>
      <Grid item xs={7}>
        <ButtonPost />
      </Grid>
      <Grid item xs={7}>
        {post.length === 0 ? (
          <Typography> There are no Posts yet</Typography>
        ) : (
          <Post posts={post || []} />
        )}
      </Grid>
    </Grid>
  );
};
