import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Avatar,
  Box,
  Button,
  Grid2 as Grid,
  Tab,
  Typography,
} from "@mui/material";
import React from "react";
import ListOfUsers from "./ListOfUsers";
import { Post } from "./Post";
import { followers } from "../../mocks/getFollowers";
import { following } from "../../mocks/getFollowing";
import FollowButton from "./FollowButton";

export const UserProfile = ({ userInfo, userId }) => {
  //Define what the show profile (user or me)
  const itsMe = userId == undefined;

  //this is for handle the options in the profile
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //
  followers.sort((a, b) => a.name.localeCompare(b.name));
  following.sort((a, b) => a.name.localeCompare(b.name));
  return (
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
              {userInfo.name}
            </Typography>
            <Typography sx={{ color: "#4E4D4A" }} variant="h6">
              {userInfo.userName}
            </Typography>
          </Grid>
          <Grid sx={{ mt: 5, ml: 3 }} item xs={4}>
            <Typography sx={{ color: "#4E4D4A" }} variant="h6">
              {userInfo.postCount} post
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
              label={`followers (${userInfo.followers || 0})`}
              value="3"
            />
            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, // Color when is selected
              }}
              label={`following (${userInfo.following || 0})`}
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Post />
        </TabPanel>
        <TabPanel value="2">Saved</TabPanel>
        <TabPanel value="3">
          <ListOfUsers follows={followers} />
        </TabPanel>
        <TabPanel value="4">
          <ListOfUsers follows={following} />
        </TabPanel>
      </TabContext>
    </>
  );
};
