import css from '../Statistics/Statistics.module.css';

export const FeedbackOptions = ({ clickGood, clickNeutral, clickBad }) => {
  return (
    <>
      <button className={css.feedbackButton} type="button" onClick={clickGood}>
        GOOD
      </button>
      <button
        className={css.feedbackButton}
        type="button"
        onClick={clickNeutral}
      >
        NEUTRAL
      </button>
      <button className={css.feedbackButton} type="button" onClick={clickBad}>
        BAD
      </button>
    </>
  );
};
