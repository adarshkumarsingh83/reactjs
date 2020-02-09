import React from "react";
import Row from "./Row";
import UserErrorBoundary from "./UserErrorBoundary";
import users from "../store/users.json";
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>USER INFORMATION </h1>
        {users.map(user => (
          <UserErrorBoundary user={user}>
            <Row user={user} />
          </UserErrorBoundary>
        ))}
      </div>
    );
  }
}

export default UserList;
