import PropTypes from 'prop-types';

export const Profile = ({
  userName,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { follower, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width={250} />
        <p className="name">{`${userName}`}</p>
        <p className="tag">{`@${tag}`}</p>
        <p className="location">{`${location}`}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{`${follower}`}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{`${views}`}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{`${likes}`}</span>
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
  stats: PropTypes.objectOf(PropTypes.number),
};
