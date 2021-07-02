import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsListItem';

function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li class="item" key={id}>
          <FriendsItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default FriendsList;
