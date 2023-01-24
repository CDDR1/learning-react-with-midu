import React from 'react';
import './TwitterCard.css';
import FollowSuggestion from './FollowSuggestion';

const TwitterCard = () => {
  return (
    <div className='twitterCard-container'>
      <h2 className='twitterCard-title'>Who to follow</h2>
      <div className='followSuggestions-container'>
        <FollowSuggestion />
      </div>
    </div>
  );
};

export default TwitterCard;