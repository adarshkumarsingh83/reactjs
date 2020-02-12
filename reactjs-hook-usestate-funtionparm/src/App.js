import React from "react";
import "./css/App.css";
import CalClassComponent from "./components/CalClassComponent";
import CalFunctionalComponent from "./components/CalFunctionalComponent";
function App() {
  return (
    <div className="App">
      <CalClassComponent />
      <CalFunctionalComponent />
    </div>
  );
}

export default App;
