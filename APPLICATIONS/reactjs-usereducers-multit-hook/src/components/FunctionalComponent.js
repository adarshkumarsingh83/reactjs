import React from "react";

const countInitValue = {
  count: 0
};

const renderFunction = (state, action) => {
  console.log(`${state.count} ${action.type} ${action.value}`);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };
    case "decrement":
      return { ...state, count: state.count - action.value };
    case "reset":
      return countInitValue;
    default:
      return state;
  }
};

const FunctionalComponent = () => {
  const [countStorevalue1, dispatcherAction1] = React.useReducer(
    renderFunction,
    countInitValue
  );

  const [countStorevalue2, dispatcherAction2] = React.useReducer(
    renderFunction,
    countInitValue
  );

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Value of the Counter One {countStorevalue1.count}</h1>
      <br />
      <button
        onClick={() => dispatcherAction1({ type: "increment", value: 2 })}
      >
        INCREMENT
      </button>
      &nbsp;
      <button
        onClick={() => dispatcherAction1({ type: "decrement", value: 2 })}
      >
        DECREMENT
      </button>
      &nbsp;
      <button onClick={() => dispatcherAction1({ type: "reset", value: 0 })}>
        RESET
      </button>
      &nbsp;
      <br />
      <br />
      <br />
      <h1>Value of the Counter Two {countStorevalue2.count}</h1>
      <br />
      <button
        onClick={() => dispatcherAction2({ type: "increment", value: 2 })}
      >
        INCREMENT
      </button>
      &nbsp;
      <button
        onClick={() => dispatcherAction2({ type: "decrement", value: 2 })}
      >
        DECREMENT
      </button>
      &nbsp;
      <button onClick={() => dispatcherAction2({ type: "reset", value: 0 })}>
        RESET
      </button>
      &nbsp;
    </div>
  );
};

export default FunctionalComponent;
