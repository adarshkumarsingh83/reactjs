import React from "react";

import "./css/App.css";
import FeedBackComponent from "./components/FeedBackComponent";
import ComplaintComponent from "./components/ComplaintComponent";
import SuggestionComponent from "./components/SuggestionComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="first-div">
          <FeedBackComponent />
        </div>

        <div className="second-div">
          <ComplaintComponent />
        </div>

        <div className="third-div">
          <SuggestionComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
