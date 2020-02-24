import React, { PureComponent } from "react";
import { Treebeard } from "react-treebeard";
import treeData from "../store/treeData";

class TreeComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { treeData };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled) {
    const { cursor, treeData } = this.state;
    if (cursor) {
      this.setState(() => ({ cursor, active: false }));
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState(() => ({
      cursor: node,
      data: Object.assign({}, treeData)
    }));
  }

  render() {
    const { treeData } = this.state;
    return <Treebeard data={treeData} onToggle={this.onToggle} />;
  }
}

export default TreeComponent;
