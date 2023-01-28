import React from "react";
import "./TwitterCard.css";
import FollowSuggestion from "./FollowSuggestion";
import { useState } from "react";

const TwitterCard = () => {
  const suggestions = [
    {
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Carlos Duque",
      nickname: "@cddr1",
      following: false,
    },
    {
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Jane Doe",
      nickname: "@j4n3d03",
      following: true,
    },
    {
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      name: "John Doe",
      nickname: "@therealjohnny",
      following: false,
    },
  ];

  const [userSuggestions, setUserSuggestions] = useState(suggestions);

  return (
    <div className="twitterCard-container">
      <h2 className="twitterCard-title">Who to follow</h2>
      <div className="followSuggestions-container">
        {userSuggestions.map((user, index) => (
          <FollowSuggestion key={index} userAvatar={user.avatar} userName={user.name} userNickname={user.nickname} isFollowing={user.following} />
        ))}
      </div>
    </div>
  );
};

export default TwitterCard;
