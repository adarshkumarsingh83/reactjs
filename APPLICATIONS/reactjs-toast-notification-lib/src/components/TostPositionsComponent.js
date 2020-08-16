import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TostPositionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    toast.configure();
  }

  toastDisplay = event => {
    toast("TOP_LEFT ", { position: toast.POSITION.TOP_LEFT });
    toast("TOP_CENTER ", { position: toast.POSITION.TOP_CENTER });
    toast("TOP_RIGHT ", { position: toast.POSITION.TOP_RIGHT });
    toast("BOTTOM_LEFT ", { position: toast.POSITION.BOTTOM_LEFT });
    toast("BOTTOM_CENTER ", { position: toast.POSITION.BOTTOM_CENTER });
    toast("BOTTOM_RIGHT ", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  render() {
    return <button onClick={this.toastDisplay}>TOAST POSITION LAYOUT </button>;
  }
}

export default TostPositionsComponent;
