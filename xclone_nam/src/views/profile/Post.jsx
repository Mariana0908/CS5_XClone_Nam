import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const Post = (post) => {

  const mock = {
    userId: 1,
    name: "Alejandra Navarro",
    userName: "@aleja2312",
    postCount: 1, //this value will be post.lenght
    following: 23,
    followers: 1522,

    myPost: [
      {
        postId: 3,
        date: "23/01/24",
        hour: "8:16 am",
        bodyPost: "programming is my passion",
        likeCount: 2,
        savePost: true, //this is state for save post
      },
      {
        postId: 1,
        date: "28/03/24",
        hour: "3:30 pm",
        bodyPost: "today is today and tomorrow is tomorrow",
        likeCount: 0,
        savePost: false, //this is state for save post
      },
      {
        postId: 2,
        date: "15/05/24",
        hour: "2:16 am",
        bodyPost: "Siuuuuuuu",
        likeCount: 15,
        savePost: true, //this is state for save post
      },

      {
        postId: 4,
        date: "9/08/24",
        hour: "10:45 pm",
        bodyPost: "Hello word",
        likeCount: 3,
        savePost: false, //this is state for save post
      },
    ],
  };
  return (
    <Box>
      {/* we map posts from mock.myPost */}
      {mock.myPost.map((post) => (
        <Card key={post.postId} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Typography sx={{ mt: 2, ml: 2, fontWeight: 'bold', color:"#353432" }} color="text.secondary">
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
              sx={{ backgroundColor: "#2790B0", color: "#FFFFFF",ml:10 }}
            >
              <BookmarkIcon />
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
