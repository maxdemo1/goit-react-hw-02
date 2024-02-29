const Feedback = ({ rating, totalFeedback }) => {
  return (
    <>
      <p>Good: {rating.good}</p>
      <p>Neutral: {rating.neutral}</p>
      <p>Bad: {rating.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive:{' '}
        {Math.round(((rating.good + rating.neutral) / totalFeedback) * 100)}%
      </p>
    </>
  );
};

export default Feedback;
