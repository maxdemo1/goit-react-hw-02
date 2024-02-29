const Options = ({ updateFeedback, resetRating, summaryRating }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>
      {summaryRating > 0 ? (
        <button type="button" onClick={resetRating}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
