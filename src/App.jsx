import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [rating, setRating] = useState(
    localStorage.getItem('currentFeedback')
      ? JSON.parse(localStorage.getItem('currentFeedback'))
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        }
  );

  const handleFeedback = feedbackType => {
    setRating(prevState => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  const handleResetRating = () => {
    localStorage.setItem(
      'currentFeedback',
      JSON.stringify({
        good: 0,
        neutral: 0,
        bad: 0,
      })
    );
    setRating(JSON.parse(localStorage.getItem('currentFeedback')));
  };

  const { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;
  const avarageRate = Math.round(((good + neutral) / totalFeedback) * 100);

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
        handleResetRating={handleResetRating}
        summaryRating={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          rating={rating}
          totalFeedback={totalFeedback}
          avarageRate={avarageRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
