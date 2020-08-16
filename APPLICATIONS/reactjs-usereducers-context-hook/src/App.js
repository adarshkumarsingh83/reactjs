import React from "react";
import "./css/App.css";
import { dataInit, renderFunction } from "./operations/CounterOperation";
import CounterContext from "./context/CounterContext";
import MyCounter from "./components/MyCounter";
import YourCounter from "./components/YourCounter";

function App() {
  const [counterData, operation] = React.useReducer(renderFunction, dataInit);

  return (
    <div className="App">
      <CounterContext.Provider
        value={{
          counter: counterData,
          actionFunction: operation
        }}
      >
        <h1>Top Level Counter Value {counterData.count}</h1>
        <hr></hr>
        <MyCounter />
        <br />
        <YourCounter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
