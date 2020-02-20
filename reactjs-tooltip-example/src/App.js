import React from "react";
import "./css/App.css";
import StringToolTipContent from "./components/StringToolTipContent";
import JsxToolTipComponent from "./components/JsxToolTipComponent";
import ReactCompoentToolTip from "./components/ReactCompoentToolTip";

function App() {
  return (
    <div className='App'>
      <StringToolTipContent />
      <hr></hr>
      <JsxToolTipComponent />
      <hr></hr>
      <ReactCompoentToolTip />
    </div>
  );
}

export default App;
