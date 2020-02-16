import React from "react";
import CounterContext from "../context/CounterContext";

const YourCounter = () => {
  const counterData = React.useContext(CounterContext);
  console.log(counterData);
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Counter Value in YourCounter {counterData.counter.count}</h1>
      <br />
      <button
        onClick={() =>
          counterData.actionFunction({ type: "increment", value: 3 })
        }
      >
        INCREMENT
      </button>
      &nbsp;
      <button
        onClick={() =>
          counterData.actionFunction({ type: "decrement", value: 3 })
        }
      >
        DECREMENT
      </button>
      &nbsp;
      <button
        onClick={() => counterData.actionFunction({ type: "reset", value: -1 })}
      >
        RESET
      </button>
    </div>
  );
};

export default YourCounter;
