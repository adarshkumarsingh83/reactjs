import React from "react";
import "./css/App.css";
import MouseClassComponent from "./components/MouseClassComponent";
import MouseFunctionalComponent from "./components/MouseFunctionalComponent";

function App() {
  return (
    <div className="App">
      <MouseClassComponent />
      <br />
      <br />
      <MouseFunctionalComponent />
    </div>
  );
}

export default App;
