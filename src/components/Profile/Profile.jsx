import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './StyledProfile';
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
      <Card>
        <Avatar src={avatar} alt="User avatar" className="avatar" width={150} />
        <Name>{`${userName}`}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{`${location}`}</Location>
      </Card>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity className="quantity">{`${followers}`}</Quantity>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{`${views}`}</Quantity>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{`${likes}`}</Quantity>
        </Item>
      </List>
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
