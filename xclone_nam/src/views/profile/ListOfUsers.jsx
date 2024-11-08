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
import { useNavigate } from "react-router-dom";

const ListOfUsers = ({ follows, users }) => {
  const [page, setPage] = useState(1);
  const usersPerPage = 10;
  const navigate = useNavigate();
  const filteredData = users.filter(item => follows.includes(item.id));

  // Calculate the total number of the pages
  const pageCount = Math.ceil(filteredData.length / usersPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  // get user of the current page
  const currentUsers = filteredData.slice(
    (page - 1) * usersPerPage,
    page * usersPerPage
  );
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
              onClick={() => navigate("/user/" + follower.id)}
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
