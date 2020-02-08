import React from "react";
import UserDataService from "../service/UserDataService";

class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    UserDataService.fetchUsers().then(res => {
      this.setState({ users: res.data });
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <h2 className="text-center">User Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="hidden">Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListUser;
