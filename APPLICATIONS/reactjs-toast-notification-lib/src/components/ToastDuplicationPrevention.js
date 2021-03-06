import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ToastDuplicationPrevention extends React.Component {
  toastId;
  customToastId = 100;
  constructor(props) {
    super(props);
    this.state = {};
    toast.configure();
  }
  notify = () => {
    if (!toast.isActive(this.toastId)) {
      this.toastId = toast("I cannot be duplicated !");
    }

    toast("xxx-yyy cannot be duplicated", {
      toastId: this.customToastId
    });
  };

  notificationClose = () => {
    toast.dismiss(this.toastId);
    toast.dismiss(this.customToastId);
  };

  render() {
    return (
      <div>
        <button onClick={this.notify}>NON DUPLICATE TOAST</button>
        &nbsp;
        <button onClick={this.notificationClose}>
          NON DUPLICATE TOAST CLOSE
        </button>
      </div>
    );
  }
}

export default ToastDuplicationPrevention;
