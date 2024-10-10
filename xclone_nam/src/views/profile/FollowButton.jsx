import React, { useState } from "react";
import { Button } from "@mui/material";

const FollowButton = ({ initialFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Button
      sx={{ backgroundColor:!isFollowing ?"#2790B0": "gray", color: !isFollowing ?"#FFFFFF": "black" }}
      variant="contained"
      onClick={handleClick}
    >
      {/* if "isFollowing" is true then it shows "unfollow", else shows follow */}
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
