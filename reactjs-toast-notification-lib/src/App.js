import React from "react";
import "./css/App.css";
import TostPositionsComponent from "./components/TostPositionsComponent";
import ToastTypeComponent from "./components/ToastTypeComponent";
import ToastAutoCloseComponent from "./components/ToastAutoCloseComponent";
import CustomComponentInToast from "./components/CustomComponentInToast";
import ToastDuplicationPrevention from "./components/ToastDuplicationPrevention";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <TostPositionsComponent />
      <br />
      <br />
      <ToastTypeComponent />
      <br />
      <br />
      <ToastAutoCloseComponent />
      <br />
      <br />
      <CustomComponentInToast />
      <br />
      <br />
      <ToastDuplicationPrevention />
    </div>
  );
}

export default App;
