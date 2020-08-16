import React from "react";
import "./css/App.css";
import ModalClassConsumer from "./components/ModalClassConsumer";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <ModalClassConsumer />
    </div>
  );
}

export default App;
