import React from "react";
import "./css/App.css";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFunctionalComponent from "./components/CounterFunctionalComponent";

function App() {
  return (
    <div className="App">
      <CounterClassComponent />
      <br />
      <CounterFunctionalComponent />
    </div>
  );
}

export default App;
