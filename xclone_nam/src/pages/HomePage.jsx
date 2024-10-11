import { Grid2 as Grid } from "@mui/material";
import { Post } from "../components/Post";
import { Cards } from "../components/Cards";

export const HomePage = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={7}>
        <Post />
      </Grid>
      <Grid item xs={7}>
        <Cards />
      </Grid>
    </Grid>
  );
};
