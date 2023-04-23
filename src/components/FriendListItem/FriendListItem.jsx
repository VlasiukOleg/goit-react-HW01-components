import PropTypes from 'prop-types';

import {
  FriendStatus,
  FriendsImg,
  FriendsName,
} from 'components/FriendList/FriendList.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus isonline={isOnline}></FriendStatus>
      <FriendsImg src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
