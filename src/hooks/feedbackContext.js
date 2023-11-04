import { createContext, useContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const handleIncrement = ev => {
    const { name } = ev.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        setTotal(total + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        setTotal(total + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        setTotal(total + 1);
        break;
      default:
        console.log('Sorry something wrong, try to refresh page');
    }
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setTotal(0);
    setPositiveFeedback(0);
  };

  useEffect(() => {
    setPositiveFeedback(parseFloat((good / total) * 100).toFixed(0) + '%');
  }, [good, total]);

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        total,
        positiveFeedback,
        handleIncrement,
        handleReset,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
