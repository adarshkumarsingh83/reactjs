import React from "react";
import ChildComponet from "./ChildComponet";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parent"
    };
  }

  wish = name => {
    alert(`handle by '${this.state.name}' origin of event by '${name}'`);
  };

  render() {
    return (
      <div>
        <ChildComponet wishHandler={this.wish} />
      </div>
    );
  }
}

export default ParentComponent;
