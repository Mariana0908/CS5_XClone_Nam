import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export const Post = () => {
  return (
    <Container sx={{ padding: 4, textAlign: "center" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#2790B0" }} aria-label="recipe">
            N
          </Avatar>
        }
      />
      <Typography variant="h5" color="black">
        "What is happening?"
      </Typography>
      <TextField
        id="post"
        name="post"
        label="Post"
        multiline
        rows={4}
        fullWidth
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
        <Button variant="contained" sx={{bgcolor:'#2790B0'}}>Post</Button>
      </Box>
    </Container>
  );
};
