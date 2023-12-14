import { useState } from 'react';

export const useCounter = (initialCounter = 1) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialCounter);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
