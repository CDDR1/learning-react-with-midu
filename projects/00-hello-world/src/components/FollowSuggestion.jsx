import "./FollowSuggestion.css";

const FollowSuggestion = ({ id, userAvatar, userName, userNickname, isFollowing, updateFollow }) => {
  return (
    <div className="suggestion-body">
      <div className="avatar-container">
        <img src={userAvatar} alt={`Avatar of ${userName}`} className="avatar" />
      </div>
      <div className="user-info">
        <h3 className="user-name">{userName}</h3>
        <span className="user-nickname">{userNickname}</span>
      </div>
      <div className="button-container">
        <button onClick={() => updateFollow(id)} className={isFollowing ? "suggestion-button following" : "suggestion-button"}>
          <span className="button-text">{isFollowing ? "Following" : "Follow"}</span>
          <span className="unfollow-text">Unfollow</span>
        </button>
      </div>
    </div>
  );
};

export default FollowSuggestion;
