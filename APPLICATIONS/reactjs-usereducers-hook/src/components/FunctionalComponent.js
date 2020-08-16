import React from "react";

const counterInitValue = 0;

const counterReducerFunction = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return counterInitValue;

    default:
      return state;
  }
};

const FunctionalComponent = () => {
  const [count, dispatch] = React.useReducer(
    counterReducerFunction,
    counterInitValue
  );

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>counter value {count}</h1>
      <br />
      <button onClick={() => dispatch("increment")}>INCREMENT</button>
      &nbsp;
      <button onClick={() => dispatch("decrement")}>DECREMENT </button>
      &nbsp;
      <button onClick={() => dispatch("reset")}>RESET </button>
    </div>
  );
};

export default FunctionalComponent;
