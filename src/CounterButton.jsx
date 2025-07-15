import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";
const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);
  return (
    <>
      <p>You clicked the button {numberOfClicks} times</p>
      <label>
        IncrementBy:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click
      </button>
    </>
  );
};

export default CounterButton;
