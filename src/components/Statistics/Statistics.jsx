import PropTypes from 'prop-types';

export const Statistics = ({ stats, title = null }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {/* если компонент ожидает
      какое-то значение, а его не передали? - при обращении к свойству объекта
  props, получим undefined.*/}
      <ul className="stat-list">
        {stats.map(element => {
          return (
            <li key={element.id} className="item">
              <span className="label">{element.label}</span>
              <span className="percentage">{element.percentage}%</span>
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
