import React from "react";
import axios from "axios";

const UseEffectEmployeeDataRepository = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [employees, setEmployees] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then(response => {
        setLoading(false);
        setError("");
        setEmployees(response.data);
      })
      .catch(error => {
        setLoading(false);
        setError("Error while Data Loading");
        setEmployees([]);
      });
  }, []);

  return (
    <div>
      <h1> {error ? error : null} </h1>
      <ul>
        {loading ? "loading..." : null}
        {employees.map(employee => {
          return (
            <ol key={employee.id}>
              {employee.id}&nbsp;
              {employee.firstName}&nbsp;
              {employee.lastName}&nbsp;
              {employee.email}
            </ol>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectEmployeeDataRepository;
