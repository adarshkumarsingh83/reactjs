import React from "react";
import "./css/App.css";
import UseEffectEmployeeDataRepository from "./components/UseEffectEmployeeDataRepository";
import UseReducerEmployeeDataRepository from "./components/UseReducerEmployeeDataRepository";

function App() {
  return (
    <div className="App">
      <h1>USER EFFECT</h1>
      <hr></hr>
      <br />
      <UseEffectEmployeeDataRepository />
      <br />
      <br />
      <h1>USER REDUCER</h1>
      <hr></hr>
      <br />
      <UseReducerEmployeeDataRepository />
    </div>
  );
}

export default App;
