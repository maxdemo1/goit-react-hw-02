import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedbackType => {
    setRating(prevState => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  const resetRating = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem('currentFeedback');
  };

  const { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('currentFeedback')) === null) return;
    setRating({ ...JSON.parse(localStorage.getItem('currentFeedback')) });
  }, []);

  useEffect(() => {
    if (totalFeedback === 0) return;
    localStorage.setItem('currentFeedback', JSON.stringify(rating));
  }, [rating, totalFeedback]);

  return (
    <div>
      <Description />
      <Options
        handleFeedback={handleFeedback}
        resetRating={resetRating}
        summaryRating={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback rating={rating} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
