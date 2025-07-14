import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increment = (amount) => {
    setNumberOfClicks(numberOfClicks + 1);
  };

  return (
    <CounterContext.Provider value={{ numberOfClicks, increment }}>
      { children }
    </CounterContext.Provider>
  );
};
