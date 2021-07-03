import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendsItem = ({ avatar, isOnline, name }) => {
  return (
    <>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? '#08c96b' : '#fc0040' }}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;
