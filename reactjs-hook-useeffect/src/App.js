import React from "react";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFunctionalComponent from "./components/CounterFunctionalComponent";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <CounterClassComponent />
      <br />
      <br />
      <CounterFunctionalComponent />
    </div>
  );
}

export default App;
