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

export const Post = () => {
  const mock = {
    userId: 1,
    name: "Alejandra Navarro",
    userName: "@aleja2312",
    postCount: 12, // This value will be post.length
    following: 23,
    followers: 1522,

    myPost: [
      {
        postId: 2,
        date: "23/01/24",
        hour: "8:16 am",
        bodyPost: "programming is my passion",
        likeCount: 2,
        savePost: true,
      },
      {
        postId: 3,
        date: "28/03/24",
        hour: "3:30 pm",
        bodyPost: "today is today and tomorrow is tomorrow",
        likeCount: 0,
        savePost: false,
      },
      {
        postId: 4,
        date: "15/05/24",
        hour: "2:16 am",
        bodyPost: "Siuuuuuuu",
        likeCount: 15,
        savePost: true,
      },
      {
        postId: 5,
        date: "9/08/24",
        hour: "10:45 pm",
        bodyPost: "Hello word",
        likeCount: 3,
        savePost: false,
      },
      {
        postId: 6,
        date: "14/09/24",
        hour: "7:00 am",
        bodyPost: "Coffee and code, my daily routine",
        likeCount: 7,
        savePost: true,
      },
      {
        postId: 7,
        date: "18/09/24",
        hour: "9:30 pm",
        bodyPost: "New project launching soon!",
        likeCount: 12,
        savePost: false,
      },
      {
        postId: 8,
        date: "20/09/24",
        hour: "11:45 am",
        bodyPost: "Feeling motivated today",
        likeCount: 5,
        savePost: true,
      },
      {
        postId: 9,
        date: "25/09/24",
        hour: "4:50 pm",
        bodyPost: "Learning never stops",
        likeCount: 10,
        savePost: false,
      },
      {
        postId: 10,
        date: "01/10/24",
        hour: "8:00 am",
        bodyPost: "Happy to collaborate with new people",
        likeCount: 8,
        savePost: true,
      },
      {
        postId: 11,
        date: "05/10/24",
        hour: "7:30 pm",
        bodyPost: "Another productive day!",
        likeCount: 4,
        savePost: false,
      },
      {
        postId: 12,
        date: "07/10/24",
        hour: "3:15 pm",
        bodyPost: "Designing a new UI/UX concept",
        likeCount: 6,
        savePost: true,
      },
      {
        postId: 13,
        date: "09/10/24",
        hour: "9:00 am",
        bodyPost: "Debugging is like solving a puzzle",
        likeCount: 9,
        savePost: false,
      },
    ],
  };

  // Function to order posts from most recent to oldest
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`20${year}-${month}-${day}`); // Add "20" to complete the year
  };

  mock.myPost.sort((a, b) => parseDate(b.date) - parseDate(a.date));

  // Pagination states
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  // Get the posts for the current page
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mock.myPost.slice(indexOfFirstPost, indexOfLastPost);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      {/* Map posts from current page */}
      {currentPosts.map((post) => (
        <Card key={post.postId} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Typography
                sx={{ mt: 2, ml: 2, fontWeight: "bold", color: "#353432" }}
                color="text.secondary"
              >
                {mock.name}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Typography
                sx={{ mt: 2, ml: 2 }}
                color="text.secondary"
                gutterBottom
              >
                {mock.userName}
              </Typography>
            </Grid>

            {/* Post date */}
            <Grid container spacing={8}>
              <Typography
                sx={{ mb: 2, ml: 60, mt: 2 }}
                color="text.secondary"
                gutterBottom
              >
                {post.date} {post.hour}
              </Typography>
            </Grid>

            {/* Post contents */}
            <Typography sx={{ mt: 5, mb: 5 }} variant="h5" component="div">
              {post.bodyPost}
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
        count={Math.ceil(mock.myPost.length / postsPerPage)}
        page={page}
        onChange={handleChangePage}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      />
    </Box>
  );
};
