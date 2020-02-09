import React from "react";

import "./css/App.css";
import GenericComponent from "./components/GenericComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="first-div">
          <GenericComponent name="Generic Complaint" name="complaint" />
        </div>
        <div className="second-div">
          <GenericComponent name="Generic Enquery" name="enquery" />
        </div>
        <div className="third-div">
          <GenericComponent name="Generic Suggestion" name="suggestion" />
        </div>
      </div>
    </div>
  );
}

export default App;
