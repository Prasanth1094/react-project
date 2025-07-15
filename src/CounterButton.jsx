import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfClicks } from "./selectors";
import { counterButtonClicked } from "./actions";
const CounterButton = () => {
  const numberOfClicks = useSelector(getNumberOfClicks);
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState(1);
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
      <button onClick={() => dispatch(counterButtonClicked)}>Click</button>
    </>
  );
};

export default CounterButton;
