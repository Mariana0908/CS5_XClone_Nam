import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  Pagination,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { formatDateAndTime, parseDate } from "../../utils/utilPosts";

export const Post = ({ posts }) => {
  // Ordenar los posts por la fecha más reciente, verificando que hourAndDate exista
  posts.sort((a, b) => {
    const dateA = a.hourAndDate?.seconds ?? 0; 
    const dateB = b.hourAndDate?.seconds ?? 0;  
    return dateB - dateA;
  });

  //Pagination states
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  //Get the posts for the current page
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      {/* Map posts from current page */}
      {currentPosts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Typography
                sx={{ mt: 2, ml: 2, fontWeight: "bold", color: "#353432" }}
                color="text.secondary"
              >
                {post.name}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Typography
                sx={{ mt: 2, ml: 2 }}
                color="text.secondary"
                gutterBottom
              >
                {post.userName}
              </Typography>
            </Grid>

            {/* Post date */}
            <Grid container spacing={8}>
              <Typography
                sx={{ mb: 2, ml: 60, mt: 2 }}
                color="text.secondary"
                gutterBottom
              >
                {parseDate(post.hourAndDate?.seconds) ||
                  formatDateAndTime(post.hourAndDate)}
              </Typography>
            </Grid>

            {/* Post contents */}
            <Typography
              sx={{
                mt: 5,
                mb: 5,
                maxWidth: 500,
                wordBreak: "break-word", // Breaks long words automatically
                overflowWrap: "break-word", // Breaks long lines
                whiteSpace: "pre-wrap", // Preserves line breaks and spaces
              }}
              variant="h5"
              component="div"
            >
              {post.body}
            </Typography>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#2790B0", color: "#FFFFFF" }}
            >
              <FavoriteIcon /> {post.likeCount}
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2790B0", color: "#FFFFFF", ml: 10 }}
            >
              <BookmarkIcon />
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* Pagination */}
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={page}
        onChange={handleChangePage}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      />
    </Box>
  );
};
