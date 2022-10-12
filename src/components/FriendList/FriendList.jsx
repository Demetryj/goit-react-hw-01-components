import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem dataOfFriends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
