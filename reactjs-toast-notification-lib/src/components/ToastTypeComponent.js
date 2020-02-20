import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ToastTypeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    toast.configure();
  }

  toastDisplay = event => {
    toast.success("SUCESS ", { position: toast.POSITION.TOP_LEFT });
    toast.error("ERROR ", { position: toast.POSITION.TOP_RIGHT });
    toast.info("INFO ", { position: toast.POSITION.BOTTOM_LEFT });
    toast.warn("WARN ", { position: toast.POSITION.BOTTOM_RIGHT });
    toast("BASIC ", { position: toast.POSITION.BOTTOM_CENTER });
  };
  render() {
    return <button onClick={this.toastDisplay}>TOAST TYPES </button>;
  }
}

export default ToastTypeComponent;
