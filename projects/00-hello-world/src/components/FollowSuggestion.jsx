import "./FollowSuggestion.css";

const FollowSuggestion = ({ userAvatar, userName, userNickname, isFollowing }) => {
  return (
    <div className="suggestion-body">
      <div className="avatar-container">
        <img src={userAvatar} alt={`Avatar of ${userName}`} className="avatar" />
      </div>
      <div className="user-info">
        <h3 className="user-name">{userName}</h3>
        <span className="user-nickname">{userNickname}</span>
      </div>
      <button className="suggestion-button">{isFollowing ? "Unfollow" : "Follow"}</button>
    </div>
  );
};

export default FollowSuggestion;
