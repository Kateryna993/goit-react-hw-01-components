import React from 'react';
import PropTypes from 'prop-types';

const FriendsItem = ({ avatar, isOnline, name }) => {
  return (
    <>
      <span
        class="status"
        style={{ backgroundColor: isOnline ? '#fc0040' : '#08c96b' }}
      ></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;
