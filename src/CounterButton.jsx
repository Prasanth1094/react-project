import { useContext } from "react";
import { CounterContext } from "./CounterContext";
const CounterButton = () => {
  const { numberOfClicks, increment } = useContext(CounterContext);

  return (
    <>
      <p>You clicked the button {numberOfClicks} times.</p>
      <button onClick={() => increment()}>Click</button>
    </>
  );
};

export default CounterButton;
