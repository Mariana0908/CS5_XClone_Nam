import React from "react";
import { useParams } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { followers } from "../../mocks/getFollowers";
import { myInfo } from "../../mocks/getMyInfo";

export const Profile = () => {
  // this is endpoint for get user by Id
  const { userId } = useParams(); //capture a value from URL

  // This will be the value that we are going to render: followerById
  const followerById = followers.find((follow) => follow.userId == userId);

  return (
    <>
      {/* if userId is undefine shows my profile */}
      {userId == undefined ? (
        // This section is for my profile
        <UserProfile userInfo={myInfo} userId={userId} />
      ) : (
        //else shows user profile
        //This section is for user profile
        <UserProfile userInfo={followerById} userId={userId} />
      )}
    </>
  );
};
