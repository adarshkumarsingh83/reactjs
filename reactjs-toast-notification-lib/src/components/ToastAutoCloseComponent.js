import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ToastAutoCloseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    toast.configure();
  }

  toastDisplay = event => {
    toast("AUTO CLOSE ENABLE FOR 8 SEC ", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000
    });
    toast("AUTO CLOSE IS DISABLE ", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false
    });
  };

  render() {
    return (
      <button onClick={this.toastDisplay}>
        TOAST AUTOCLOSE AND ENABLE AND DISABLE
      </button>
    );
  }
}

export default ToastAutoCloseComponent;
