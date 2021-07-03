import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsListItem';
import styles from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={styles.item} key={id}>
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
