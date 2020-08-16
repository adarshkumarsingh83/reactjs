import React from "react";
import "./css/App.css";
import ClassCounterComponent from "./components/ClassCounterComponent";
import FunctionalCounterComponent from "./components/FunctionalCounterComponent";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <h1>CLASS COUNTER</h1>
      <hr></hr>
      <ClassCounterComponent />
      <br />
      <br />
      <h1>FUNCTIONAL COUNTER</h1>
      <hr></hr>
      <FunctionalCounterComponent />
    </div>
  );
}

export default App;
