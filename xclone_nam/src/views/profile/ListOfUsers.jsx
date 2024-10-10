import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FollowButton from "./FollowButton";
import Pagination from "@mui/material/Pagination";

const ListOfUsers = ({ follows }) => {
  const [page, setPage] = useState(1);
  const usersPerPage = 10;

  // Calculate the total number of the pages
  const pageCount = Math.ceil(follows.length / usersPerPage);

  // get user of the current page
  const currentUsers = follows.slice(
    (page - 1) * usersPerPage,
    page * usersPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <List>
        {currentUsers.map((follower) => (
          <ListItem
            key={follower.id}
            secondaryAction={
              <FollowButton initialFollowing={follower.isFollowing} />
            }
          >
            <ListItemAvatar>
              <Avatar
                alt="image profile"
                src={follower.img}
                sx={{ width: 40, height: 40 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={follower.name}
              secondary={follower.userName}
            />
          </ListItem>
        ))}
      </List>

      {/* Pagination */}
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChangePage}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      />
    </Box>
  );
};

export default ListOfUsers;
