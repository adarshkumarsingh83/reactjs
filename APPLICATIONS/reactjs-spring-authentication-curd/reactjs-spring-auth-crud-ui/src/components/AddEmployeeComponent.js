import React, { Component } from "react";

import EmployeeService from "../service/EmployeeService";

class AddEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    console.log(`AddEmployeeComponent.constructor()`, props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      message: null,
    };
  }

  saveEmployee = (e) => {
    e.preventDefault();
    let user = {
      id: 0,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      profession: this.state.profession,
    };
    EmployeeService.addEmployee(user)
      .then((res) => {
        this.setState({ message: "Employee added successfully." });
      })
      .catch((error) => {
        this.setState({ message: "Employee addding operation is failed " });
        console.log(error);
      })
      .finally(() => {
        console.log(`save operation call completed`);
        this.props.history.push("/employees-list");
      });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <h2 className="text-center">Add User</h2>
        <form>
          <div className="form-group">
            <label>First Name:</label>
            <input
              placeholder="First Name"
              name="firstName"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              placeholder="Last name"
              name="lastName"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              placeholder="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Profession:</label>
            <input
              type="text"
              placeholder="profession"
              name="profession"
              className="form-control"
              value={this.state.profession}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveEmployee}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddEmployeeComponent;
