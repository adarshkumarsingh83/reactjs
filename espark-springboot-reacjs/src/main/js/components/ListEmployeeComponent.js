import React from 'react'
import RestApiServices from "../services/RestApiServices";

class ListEmployeeComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            message: null
        }
    }

    componentDidMount = () => {
        this.reloadEmployeeList();
    }

    reloadEmployeeList = () => {
        RestApiServices.fetchEmployee()
            .then((res) => {
                this.setState({ employees: res.data })
            });
    }

    deleteEmployee = (id) => {
        RestApiServices.deleteEmployee(id)
            .then(res => {
                this.setState({ message: 'Employee deleted successfully.' });
                this.setState({ employees: this.state.employees.filter(employee => employee.id !== employee) });
            })
    }

    editEmployee = (id, employee) => {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-employee');
    }

    addEmployee = () => {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                {this.state.message}
                <h2 className="text-center">Employee Details</h2>
                <button className="btn btn-danger" style={{ width: '100px' }} onClick={() => this.addEmployee()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.age}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteEmployee(employee.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editEmployee(employee.id, employee)} style={{ marginLeft: '20px' }}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListEmployeeComponent;