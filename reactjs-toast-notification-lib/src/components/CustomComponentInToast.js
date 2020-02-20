import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomComponentForToast from "./CustomComponentForToast";

class CustomComponentInToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    toast.configure();
  }
  toastDisplay = event => {
    toast(<CustomComponentForToast message="this is custom toast" />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
    });
  };

  render() {
    return (
      <button onClick={this.toastDisplay}>TOAST CUSTOM COMPONENT RENDER</button>
    );
  }
}

export default CustomComponentInToast;
