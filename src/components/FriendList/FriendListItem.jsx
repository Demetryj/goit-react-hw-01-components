import PropTypes from 'prop-types';

export const FriendListItem = ({ dataOfFriends }) => {
  return dataOfFriends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className="item">
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
};
FriendListItem.propTypes = {
  dataOfFriends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
