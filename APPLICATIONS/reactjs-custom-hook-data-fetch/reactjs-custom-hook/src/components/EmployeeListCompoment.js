import React from "react";
import useGetDataFromServer from "../hooks/useGetDataFromServer";

const EmployeeListCompoment = () => {
  const [loading, error, data] = useGetDataFromServer(
    "http://localhost:8080/employees"
  );

  return (
    <div>
      <h1> {error ? error : null} </h1>
      <ul>
        {loading ? "loading..." : null}
        {data.map(employee => {
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

export default EmployeeListCompoment;
