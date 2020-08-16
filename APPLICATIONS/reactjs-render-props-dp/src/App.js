import React from "react";
import "./css/App.css";
import FeedBackComponent from "./components/FeedBackComponent";
import ComplaintComponent from "./components/ComplaintComponent";
import SuggestionComponent from "./components/SuggestionComponent";
import RenderPropComponent from "./components/RenderPropComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="first-div">
          <RenderPropComponent
            render={(count, stars, countSubmit) => (
              <FeedBackComponent
                count={count}
                stars={stars}
                countSubmit={countSubmit}
              />
            )}
          />
        </div>

        <div className="second-div">
          <RenderPropComponent
            render={(count, stars, countSubmit) => (
              <ComplaintComponent
                count={count}
                stars={stars}
                countSubmit={countSubmit}
              />
            )}
          />
        </div>

        <div className="third-div">
          <RenderPropComponent
            render={(count, stars, countSubmit) => (
              <SuggestionComponent
                count={count}
                stars={stars}
                countSubmit={countSubmit}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
