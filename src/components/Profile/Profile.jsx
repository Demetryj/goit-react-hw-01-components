import PropTypes from 'prop-types';
import { Name, Tag, Location, Label, Quantity } from './StyledProfile';

export const Profile = ({
  userName,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width={150} />
        <Name>{`${userName}`}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{`${location}`}</Location>
      </div>

      <ul className="stats">
        <li>
          <Label>Followers</Label>
          <Quantity className="quantity">{`${followers}`}</Quantity>
        </li>
        <li>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{`${views}`}</Quantity>
        </li>
        <li>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{`${likes}`}</Quantity>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
