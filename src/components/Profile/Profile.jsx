import PropTypes from 'prop-types'; 
import { ProfileContainer, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity } from "./Profile.styled";


export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
        <ProfileContainer>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"      
    />
    <Name>{username}</Name>
    <Tag>{'@' + tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <li>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </li>
    <li>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </li>
    <li>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </li>
  </Stats>
</ProfileContainer>
    )
};

Profile.propTupes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.string,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};