import React, { useState } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { followers } from "../../mocks/getFollowers";

const FollowButton = ({ initialFollowing, username }) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    // Validation message follow or unfollow using SweetAlert2
    if (!isFollowing) {
      Swal.fire({
        title: "FOLLOW",
        text: `you have started to follow ${followers.userName}`,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#2790B0",
      });
    } else {
      Swal.fire({
        title: "UNFOLLOW",
        text: `you have unfollowed ${followers.userName}`,
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "gray",
      });
    }
  };
  return (
    <Button
      sx={{
        backgroundColor: !isFollowing ? "#2790B0" : "gray",
        color: !isFollowing ? "#FFFFFF" : "black",
      }}
      variant="contained"
      onClick={handleClick}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
