import PropTypes from 'prop-types';
import { Status, NameFriend } from './StyledFriendListItem';

export const FriendListItem = ({ dataOfFriends }) => {
  return dataOfFriends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className="item">
        <Status isOnline={isOnline}></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="75" />
        <NameFriend className="name">{name}</NameFriend>
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
