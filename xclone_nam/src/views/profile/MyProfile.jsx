import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { fetchPosts } from "../../utils/utilPosts";
import { CircularProgress, Typography } from "@mui/material";

export const Profile = () => {
  // this is endpoint for get user by Id
  const { userId } = useParams(); //capture a value from URL
  const { post, setPost, user } = useContext(Context);
  const [loading, setLoading] = useState(false);
    console.log(user)
  useEffect(() => {
    setLoading(true);
    // Llama a `fetchPosts` y pasa un callback que actualizará el estado `post`
    fetchPosts((fetchedPosts) => {
      if(userId){
        setPost(fetchedPosts.filter((post) => post.userId === userId));

      }
      else {

        setPost(fetchedPosts.filter((post) => post.userId === userId || post.userId === user.uid));
      }
      setLoading(false);
    });
  }, [userId, user]);

  return (
    <>
      {loading ?<>      
      <Typography variant="h5">Loading ...</Typography>
      <CircularProgress />
      </>
      : (
        <>
          {/* if userId is undefine shows my profile */}
          {userId == undefined ? (
            // This section is for my profile
            <UserProfile userInfo={user} userId={user.userId} posts={post} />
          ) : (
            //else shows user profile
            //This section is for user profile
            <UserProfile userInfo={user} userId={userId || user.userId} posts={post} />
          )}
        </>
      )}
    </>
  );
};
