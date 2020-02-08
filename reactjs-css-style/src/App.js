import React from "react";
import "./App.css";
import Wish from "./components/Wish";
import InLineStyle from "./components/InLineStyle";
import ModuleStyle from "./components/ModuleStyle";

function App() {
  return (
    <div className="App">
      <Wish styleClassName="primary" />
      <Wish styleClassName="secondry" />
      <br />
      <InLineStyle />
      <br />
      <ModuleStyle />
    </div>
  );
}

export default App;
