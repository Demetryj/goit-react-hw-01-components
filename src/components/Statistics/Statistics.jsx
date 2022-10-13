import PropTypes from 'prop-types';
import { Title, Percentage, Label } from './StyledStatistics';

export const Statistics = ({ stats, title = null }) => {
  return (
    <section className="statistics">
      {title && <Title>{title}</Title>}
      {/* если компонент ожидает
      какое-то значение, а его не передали? - при обращении к свойству объекта
  props, получим undefined.*/}
      <ul className="stat-list">
        {stats.map(element => {
          return (
            <li key={element.id} className="item">
              <Label>{element.label}</Label>
              <Percentage>{element.percentage}%</Percentage>
            </li>
          );
        })}
      </ul>
    </section>
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
