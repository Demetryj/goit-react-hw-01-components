import PropTypes from 'prop-types';
import { List, Item, Title, Percentage, Label } from './StyledStatistics';
import { Box } from '../Box';

export const Statistics = ({ stats, title = null }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mx="auto"
      mb={[7]}
      pt={title ? [5] : [0]}
      width="400px"
      bg="backgroundMain"
      as="section"
    >
      {title && <Title>{title}</Title>}
      {/* если компонент ожидает
      какое-то значение, а его не передали? - при обращении к свойству объекта
  props, получим undefined.*/}
      <List>
        {stats.map(element => {
          return (
            <Item key={element.id}>
              <Label>{element.label}</Label>
              <Percentage>{element.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
