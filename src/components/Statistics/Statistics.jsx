import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.statistics} key="1">
      <h2>Statistics</h2>
      <p>GOOD:{good}</p>
      <p>NEUTRAL:{neutral}</p>
      <p>BAD:{bad}</p>
      <p>TOTAL:{total}</p>
      <p>Positive feedback:{positive}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
