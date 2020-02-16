import React from "react";

const dataStoreInitValue = {
  countValue: 0
};

const reducerFunction = (state, action) => {
  console.log(`${state.countValue} ${action.type} ${action.value} `);
  switch (action.type) {
    case "increment":
      return { countValue: state.countValue + action.value };
    case "decrement":
      return { countValue: state.countValue - action.value };
    case "reset":
      return dataStoreInitValue;
    default:
      return state;
  }
};

const FunctionalComponent = () => {
  const [dataStore, dispatcherAction] = React.useReducer(
    reducerFunction,
    dataStoreInitValue
  );

  return (
    <div>
      <br />
      <br />
      <h1>Value of coutner {dataStore.countValue} </h1>
      <br />
      <button onClick={() => dispatcherAction({ type: "increment", value: 2 })}>
        INCREMENT
      </button>
      &nbsp;
      <button onClick={() => dispatcherAction({ type: "decrement", value: 2 })}>
        DECREMENT
      </button>
      &nbsp;
      <button onClick={() => dispatcherAction({ type: "reset", value: 0 })}>
        RESET
      </button>
    </div>
  );
};

export default FunctionalComponent;
