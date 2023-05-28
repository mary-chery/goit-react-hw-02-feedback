import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onGetFeedback, names }) => {
  return (
    <>
      <ul>
        {names.map(name => (
          <li key={name}>
            <button
              type="button"
              className={css.feedbackButton}
              onClick={() => onGetFeedback(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
