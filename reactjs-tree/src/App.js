import React from "react";
import TreeComponent from "./components/TreeComponent";

import "./css/App.css";

function App() {
  var styles = {
    margin: "20px",
    maxWidth: "500px",
    height: "250px",
    display: "inline-block"
  };

  return (
    <div className='App'>
      <div style={styles}>
        <TreeComponent />
      </div>
    </div>
  );
}

export default App;
