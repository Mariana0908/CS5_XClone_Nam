import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Avatar, Box, CircularProgress, Grid2 as Grid, Tab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListOfUsers from "./ListOfUsers";
import { Post } from "./Post";
import FollowButton from "./FollowButton";
import { fetchUsers } from "../../utils/utilUser";

export const UserProfile = ({ userInfo, userId, posts }) => {
  
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [loading, setLoading] = useState(true);
  //Define what the show profile (user or me)
  const itsMe = userId == undefined;
  console.log(userId)
  //this is for handle the options in the profile
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setLoading(true);
    // Llama a `fetchUsers` para obtener los usuarios y actualizar el estado
    fetchUsers((fetchedUsers) => {
      setUser(fetchedUsers.find((user)=>user.id === userId || user.id === userInfo.id));
      setUsers(fetchedUsers);
      setLoading(false);
    });
}, [setUser]);
return (
    <>
    {loading ? <CircularProgress /> :
    <>
      <Box sx={{ flexGrow: 1, mt: 8 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <Avatar
              alt="image profile"
              src={userInfo.img}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid sx={{ mt: 5 }} item xs={6}>
            <Typography sx={{ color: "#353432" }} variant="h5">
              {" "}
              { user?.name || userInfo.name}
            </Typography>
            <Typography sx={{ color: "#4E4D4A" }} variant="h6">
              @{ user?.userName || userInfo.userName}
            </Typography>
          </Grid>
          <Grid sx={{ mt: 5, ml: 3 }} item xs={4}>
            <Typography sx={{ color: "#4E4D4A" }} variant="h6">
              {posts.length || 0} post
            </Typography>
            {/* && help us for only condition, if is only if without else */}
            {!itsMe && <FollowButton initialFollowing={userInfo.isFollowing} />}
          </Grid>
        </Grid>
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            TabIndicatorProps={{ style: { backgroundColor: "#94BA65" } }}
            onChange={handleChange}
            centered
          >
            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, //Color when is selected
              }}
              label="Post"
              value="1"
            />
            {itsMe && (
              <Tab
                sx={{
                  color: "#353432",
                  "&.Mui-selected": { color: "#353432" }, //Color when is selected
                }}
                label="saved"
                value="2"
              />
            )}

            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, // Color when is selected
              }}
              // templete string format
              label={`followers (${user?.listOfFollowers.length || 0})`}
              value="3"
            />
            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, // Color when is selected
              }}
              label={`following (${user?.listOfFollowing.length || 0})`}
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* if posts exist then render the post else show a message */}
          {posts && posts.length > 0? (
            <Post posts={posts} />
          ) : (
            <Typography sx={{ color: "#4E4D4A", mt: 10 }} variant="h6">There are not posts yet</Typography>
          ) 
          }
        </TabPanel>
        <TabPanel value="2">Saved</TabPanel>
        <TabPanel value="3">
          <ListOfUsers follows={user?.listOfFollowers || []} users={users} />
        </TabPanel>
        <TabPanel value="4">
          <ListOfUsers follows={user?.listOfFollowing || []} users={users} />
        </TabPanel>
      </TabContext>
      </>}
    </>
  );
};
