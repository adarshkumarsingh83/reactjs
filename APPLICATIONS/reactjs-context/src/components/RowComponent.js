import React from "react";
import ColumnComponent from "./ColumnComponent";
import { UserDataContextConsumer } from "../context/UserDataContext";
class RowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserDataContextConsumer>
        {users => users.map(user => <ColumnComponent user={user} />)}
      </UserDataContextConsumer>
    );
  }
}

export default RowComponent;
