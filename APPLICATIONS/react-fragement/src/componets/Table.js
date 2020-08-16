import React from "react";
import Column from "./Columns";

import users from "../store/users.json";

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <rh>Id</rh>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
        </tr>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <tr>
              <Column data={user.id} />
              <Column data={user.firstName} />
              <Column data={user.lastName} />
              <Column data={user.email} />
            </tr>
          </React.Fragment>
        ))}
      </table>
    );
  }
}

export default Table;
