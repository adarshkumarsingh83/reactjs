import React, { Component } from "react";

import EmployeeService from "../service/EmployeeService";

class EditEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    console.log(`EditEmployeeComponent.constructor()`, props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
    };
  }

  componentDidMount = () => {
    this.loadEmployee();
  };

  loadEmployee = () => {
    EmployeeService.fetchEmployeeById(window.localStorage.getItem("id"))
      .then((res) => {
        let employee = res.data.data;
        this.setState({ message: "Employee fetch operation is successfully " });
        this.setState({
          id: employee.id,
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          profession: employee.profession,
        });
      })
      .catch((error) => {
        this.setState({ message: "Employee fetch operation is failed " });
        console.log(error);
      })
      .finally(() => {
        window.localStorage.removeItem("id");
        console.log(`fetch operation call completed`);
      });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      profession: this.state.profession,
    };
    EmployeeService.editEmployee(employee)
      .then((res) => {
        this.setState({ message: "Employee edited successfully." });
      })
      .catch((error) => {
        this.setState({ message: "Employee edited operation is failed " });
        console.log(error);
      })
      .finally(() => {
        console.log(`edited operation call completed`);
        this.props.history.push("/employees-list");
      });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <h2 className="text-center">Edit User</h2>
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

export default EditEmployeeComponent;
