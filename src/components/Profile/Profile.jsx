import PropTypes from 'prop-types';
import { Avatar, Name, Tag, Location, Label, Quantity } from './StyledProfile';
import { Box } from '../Box';

export const Profile = ({
  userName,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      mx="auto"
      mb={[7]}
      width="300px"
      bg="white"
      borderRadius="normal"
      boxShadow="first"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={[5]}
      >
        <Avatar src={avatar} alt="User avatar" className="avatar" width={150} />
        <Name>{`${userName}`}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{`${location}`}</Location>
      </Box>

      <Box
        display="flex"
        borderTop="normal"
        borderTopColor="borderColor"
        bg="backgroundStat"
        as="ul"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100px"
          py={[4]}
          borderRight="normal"
          borderRightColor="borderColor"
          as="li"
        >
          <Label>Followers</Label>
          <Quantity className="quantity">{`${followers}`}</Quantity>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100px"
          py={[4]}
          borderRight="normal"
          borderRightColor="borderColor"
          as="li"
        >
          <Label className="label">Views</Label>
          <Quantity className="quantity">{`${views}`}</Quantity>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100px"
          py={[4]}
          as="li"
        >
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{`${likes}`}</Quantity>
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
