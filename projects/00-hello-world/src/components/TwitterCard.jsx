import React from "react";
import "./TwitterCard.css";
import FollowSuggestion from "./FollowSuggestion";
import { useState } from "react";

const TwitterCard = () => {
  const suggestions = [
    {
      id: 277,
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Carlos Duque",
      nickname: "@cddr1",
      following: false,
    },
    {
      id: 278,
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Jane Doe",
      nickname: "@j4n3d03",
      following: true,
    },
    {
      id: 279,
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      name: "John Doe",
      nickname: "@therealjohnny",
      following: false,
    },
  ];

  const [userSuggestions, setUserSuggestions] = useState(suggestions);

  const toggleFollow = (suggestionId) => {
    const updatedSuggestions = userSuggestions.map(suggestion => {
      if (suggestion.id === suggestionId) {
        suggestion.following = !suggestion.following;
      }
      return suggestion;
    })

    setUserSuggestions(updatedSuggestions);
  };

  return (
    <div className="twitterCard-container">
      <h2 className="twitterCard-title">Who to follow</h2>
      <div className="followSuggestions-container">
        {userSuggestions.map((user) => (
          <FollowSuggestion key={user.id} id={user.id} userAvatar={user.avatar} userName={user.name} userNickname={user.nickname} isFollowing={user.following} />
        ))}
      </div>
    </div>
  );
};

export default TwitterCard;
