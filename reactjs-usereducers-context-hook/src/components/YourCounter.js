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
      <h1>Value of the Counter One {counterData.counter.count}</h1>
      <br />
      <button onClick={() => counterData.actionFunction("increment")}>
        INCREMENT
      </button>
      &nbsp;
      <button onClick={() => counterData.actionFunction("decrement")}>
        DECREMENT
      </button>
      &nbsp;
      <button onClick={() => counterData.actionFunction("reset")}>RESET</button>
    </div>
  );
};

export default YourCounter;
