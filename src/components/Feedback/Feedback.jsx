const Feedback = ({ rating, totalFeedback, avarageRate }) => {
  return (
    <>
      <p>Good: {rating.good}</p>
      <p>Neutral: {rating.neutral}</p>
      <p>Bad: {rating.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {avarageRate}%</p>
    </>
  );
};

export default Feedback;
