import PropTypes from 'prop-types';
import { Box } from '../Box';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      mx="auto"
      mb={[7]}
      pt={[3]}
      width="350px"
      bg="backgroundMain"
      as="ul"
    >
      <FriendListItem dataOfFriends={friends} />
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
