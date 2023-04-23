import PropTypes from 'prop-types';

import {
  ProfileCard,
  UserInfo,
  UserImg,
  UserName,
  UserTag,
  UserStats,
  UserStatsItem,
  UserStatsLabel,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,

  likes,
}) => {
  return (
    <ProfileCard>
      <UserInfo>
        <UserImg>
          <img src={avatar} alt="User avatar" width="50" />
        </UserImg>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <p>{location}</p>
      </UserInfo>

      <UserStats>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <span>{followers}</span>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <span>{views}</span>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <span>{likes}</span>
        </UserStatsItem>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
