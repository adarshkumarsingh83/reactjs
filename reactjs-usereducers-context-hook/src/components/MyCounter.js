import React from "react";
import CounterContext from "../context/CounterContext";

const MyCounter = () => {
  const counterData = React.useContext(CounterContext);
  console.log(counterData);
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Counter Value in MyCounter {counterData.counter.count}</h1>
      <br />
      <button
        onClick={() =>
          counterData.actionFunction({ type: "increment", value: 2 })
        }
      >
        INCREMENT
      </button>
      &nbsp;
      <button
        onClick={() =>
          counterData.actionFunction({ type: "decrement", value: 2 })
        }
      >
        DECREMENT
      </button>
      &nbsp;
      <button
        onClick={() => counterData.actionFunction({ type: "reset", value: 0 })}
      >
        RESET
      </button>
    </div>
  );
};

export default MyCounter;
