import React from "react";

const dataStoreInitValue = {
  countValue1: 0,
  countValue2: 0
};

const reducerFunction = (state, action) => {
  console.log(`${state.countValue1} ${action.type} ${action.value} `);
  switch (action.type) {
    case "increment1":
      return { ...state, countValue1: state.countValue1 + action.value };
    case "decrement1":
      return { ...state, countValue1: state.countValue1 - action.value };
    case "reset1":
      return { ...state, countValue1: 0 };
    case "increment2":
      return { ...state, countValue2: state.countValue2 + action.value };
    case "decrement2":
      return { ...state, countValue2: state.countValue2 - action.value };
    case "reset2":
      return { ...state, countValue2: 0 };
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
      <h1>Value of coutner {dataStore.countValue1} </h1>
      <br />
      <button
        onClick={() => dispatcherAction({ type: "increment1", value: 2 })}
      >
        INCREMENT COUNTER 1
      </button>
      &nbsp;
      <button
        onClick={() => dispatcherAction({ type: "decrement1", value: 2 })}
      >
        DECREMENT COUNTER 1
      </button>
      &nbsp;
      <button onClick={() => dispatcherAction({ type: "reset1", value: 0 })}>
        RESET COUNTER 1
      </button>
      <br />
      <br />
      <h1>Value of coutner {dataStore.countValue2} </h1>
      <br />
      <button
        onClick={() => dispatcherAction({ type: "increment2", value: 2 })}
      >
        INCREMENT COUNTER 2
      </button>
      &nbsp;
      <button
        onClick={() => dispatcherAction({ type: "decrement2", value: 2 })}
      >
        DECREMENT COUNTER 2
      </button>
      &nbsp;
      <button onClick={() => dispatcherAction({ type: "reset2", value: 0 })}>
        RESET COUNTER 2
      </button>
    </div>
  );
};

export default FunctionalComponent;
