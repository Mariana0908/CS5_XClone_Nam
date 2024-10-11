import { Grid2 as Grid } from "@mui/material";
import { Post } from "../views/profile/Post";
import { posts } from "../mocks/posts";
import ButtonPost from "../components/ButtonPost";
import { FormPost } from "../components/FormPost";

export const HomePage = () => {
  return (
    <Grid
      container
      direction="column" //vertically
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 10 }}
    >
      <Grid item>
        <FormPost />
      </Grid>
      <Grid item xs={7}>
        <ButtonPost />
      </Grid>
      <Grid item xs={7}>
        <Post posts={posts} />
      </Grid>
    </Grid>
  );
};
