import PropTypes from 'prop-types';
import { Status, NameFriend, Avatar } from './StyledFriendListItem';
import { Box } from '../Box';

export const FriendListItem = ({ dataOfFriends }) => {
  return dataOfFriends.map(({ avatar, name, isOnline, id }) => {
    return (
      <Box
        key={id}
        display="flex"
        alignItems="center"
        mb={[4]}
        py={[3]}
        px={[4]}
        width={300}
        bg="backgroundMain"
        borderRadius="normal"
        boxShadow="second"
        as="li"
      >
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="75" />
        <NameFriend>{name}</NameFriend>
      </Box>
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
