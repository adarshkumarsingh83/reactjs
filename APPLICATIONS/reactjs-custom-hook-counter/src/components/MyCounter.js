import React from "react";
import useCounterHook from "../hooks/useCounterHook";
const MyCounter = () => {
  const [count, incrementCount, decrementCount, reSetCount] = useCounterHook(
    0,
    2
  );

  return (
    <div>
      <h1>Count Value {count}</h1>
      <br />
      <button onClick={incrementCount}>INCREMENT COUNT</button>
      <button onClick={decrementCount}>DECREMENT COUNT</button>
      <button onClick={reSetCount}>RESET COUNT</button>
    </div>
  );
};

export default MyCounter;
