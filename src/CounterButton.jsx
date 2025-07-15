import React, { useState } from "react";

import { observer } from "mobx-react-lite";
const CounterButton = observer(({ counter }) => {
  const [incrementBy, setIncrementBy] = useState(1);
  return (
    <>
      <p>You clicked the button {counter.numberOfClicks} times</p>
      <label>
        IncrementBy:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() =>counter.increment(incrementBy)}>
        Click
      </button>
    </>
  );
});

export default CounterButton;
