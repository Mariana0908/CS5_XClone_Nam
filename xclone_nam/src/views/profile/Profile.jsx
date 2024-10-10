import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import user from "../../assets/images/user.png";
import { Grid2 as Grid, Typography } from "@mui/material";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";
import user6 from "../../assets/images/user6.png";
import user7 from "../../assets/images/user7.png";
import user8 from "../../assets/images/user8.png";
import user9 from "../../assets/images/user9.png";
import user10 from "../../assets/images/user10.png";
import user11 from "../../assets/images/user11.png";
import user12 from "../../assets/images/user12.png";
import user13 from "../../assets/images/user13.png";
import user14 from "../../assets/images/user14.png";
import ListOfUsers from "./ListOfUsers";
import { Post } from "./Post";

export const Profile = () => {
  // this is endpoint for get user by Id
  const mock = {
    userId: 1,
    img: user,
    name: "Alejandra Navarro",
    userName: "@aleja2312",
    postCount: 4, //this value will be myPost.lenght
    following: 23,
    followers: 1522,

    myPost: [
      {
        postId: 3,
        date: "23/01/24",
        bodyPost: "programming is my passion",
        likeCount: 2,
        savePost: true, //this is state for save post
      },
      {
        postId: 1,
        date: "28/03/24",
        bodyPost: "today is today and tomorrow is tomorrow",
        likeCount: 0,
        savePost: false, //this is state for save post
      },
      {
        postId: 2,
        date: "15/05/24",
        bodyPost: "Siuuuuuuu",
        likeCount: 15,
        savePost: true, //this is state for save post
      },

      {
        postId: 4,
        date: "9/08/24",
        bodyPost: "Hello word",
        likeCount: 3,
        savePost: false, //this is state for save post
      },
    ],
  };

  const followers = [
    {
      userId: 17,
      img: user7,
      name: "Elena Vargas",
      userName: "@elena_v",
      isFollowing: true,
    },
    {
      userId: 1,
      img: user10,
      name: "Kevin Suarez",
      userName: "@kev_03",
      isFollowing: true,
    },
    {
      userId: 5,
      img: user5,
      name: "Lucía Fernández",
      userName: "@luciafdez",
      isFollowing: false,
    },
    {
      userId: 2,
      img: user2,
      name: "Antonio Garcés",
      userName: "@antonio1223",
      isFollowing: false,
    },
    {
      userId: 3,
      img: user3,
      name: "María Rodríguez",
      userName: "@maria_rodriguez",
      isFollowing: true,
    },
    {
      userId: 4,
      img: user4,
      name: "Javier Sánchez",
      userName: "@jav_sanchez",
      isFollowing: true,
    },

    {
      userId: 6,
      img: user1,
      name: "Carlos López",
      userName: "@carlitolopez",
      isFollowing: true
    },
    {
      userId: 7,
      img: user5,
      name: "Isabel Martínez",
      userName: "@isabel.mtz",
      isFollowing: false,
    },
    {
      userId: 8,
      img: user14,
      name: "Miguel Torres",
      userName: "@migueltorres",
      isFollowing: true,
    },
    {
      userId: 9,
      img: user13,
      name: "Sofía Castro",
      userName: "@sofiacastro",
      isFollowing: true,
    },
    {
      userId: 10,
      img: user9,
      name: "Alejandro Gómez",
      userName: "@alejandro_gomez",
      isFollowing: false,
    },
    {
      userId: 11,
      img: user3,
      name: "Valeria Ortiz",
      userName: "@val_ortiz",
      isFollowing: true,
    },

    {
      userId: 14,
      img: user13,
      name: "Gabriela Ruiz",
      userName: "@gabyruiz",
      isFollowing: false,
    },
    {
      userId: 15,
      img: user7,
      name: "Patricia Morales",
      userName: "@patty_morales",
      isFollowing: true,
    },
    {
      userId: 16,
      img: user6,
      name: "David Ramírez",
      userName: "@davidram",
      isFollowing: false,
    },
    {
      userId: 13,
      img: user14,
      name: "Fernando Pérez",
      userName: "@fer_perez",
      isFollowing: false,
    },
  ];

  const following = [
    {
      userId: 1,
      img: user10,
      name: "Kevin Suarez",
      userName: "@kev_03",
      isFollowing: true,
    },
    {
      userId: 2,
      img: user2,
      name: "Antonio Garcés",
      userName: "@antonio1223",
      isFollowing: true,
    },
    {
      userId: 3,
      img: user3,
      name: "María Rodríguez",
      userName: "@maria_rodriguez",
      isFollowing: true,
    },
    {
      userId: 4,
      img: user4,
      name: "Javier Sánchez",
      userName: "@jav_sanchez",
      isFollowing: true,
    },
    {
      userId: 5,
      img: user5,
      name: "Lucía Fernández",
      userName: "@luciafdez",
      isFollowing: true,
    },
    {
      userId: 6,
      img: user6,
      name: "Carlos López",
      userName: "@carlitolopez",
      isFollowing: true,
    },
    {
      userId: 7,
      img: user7,
      name: "Isabel Martínez",
      userName: "@isabel.mtz",
      isFollowing: true,
    },
    {
      userId: 8,
      img: user8,
      name: "Miguel Torres",
      userName: "@migueltorres",
      isFollowing: true,
    },
    {
      userId: 9,
      img: user11,
      name: "Sofía Castro",
      userName: "@sofiacastro",
      isFollowing: true,
    },
    {
      userId: 10,
      img: user9,
      name: "Alejandro Gómez",
      userName: "@alejandro_gomez",
      isFollowing: true,
    },
    {
      userId: 11,
      img: user12,
      name: "Valeria Ortiz",
      userName: "@val_ortiz",
      isFollowing: true,
    },
  ];

  //this is for handle the options in the profile
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <Avatar
              alt="image profile"
              src={mock.img}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid sx={{ mt: 5 }} item xs={6}>
            <Typography sx={{ color: "#353432" }} variant="h5">
              {" "}
              {mock.name}
            </Typography>
            <Typography sx={{ color: "#4E4D4A" }} variant="h6">
              {mock.userName}
            </Typography>
          </Grid>
          <Grid sx={{ mt: 5, ml: 3 }} item xs={2}>
            <Typography sx={{ color: "#4E4D4A" }} variant="h6">
              {mock.postCount} post
            </Typography>
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
            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, // Color when is selected
              }}
              label="Saved"
              value="2"
            />

            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, // Color when is selected
              }}
              // templete string format
              label={`followers (${mock.followers})`}
              value="3"
            />
            <Tab
              sx={{
                color: "#353432",
                "&.Mui-selected": { color: "#353432" }, // Color when is selected
              }}
              label={`following (${mock.following})`}
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1"><Post/></TabPanel>
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
