import React from "react";
import axios from "axios";

const initDataState = {
  loading: true,
  error: "",
  employees: []
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCESS":
      return {
        loading: false,
        error: "",
        employees: action.payload
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        error: "Error in Fetching Data From Server",
        employees: []
      };
    default:
      return state;
  }
};

const UseReducerEmployeeDataRepository = () => {
  
    const [state, dispathFunction] = React.useReducer(
    reducerFunction,
    initDataState
  );

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then(response => {
        dispathFunction({ type: "FETCH_SUCESS", payload: response.data });
      })
      .catch(error => {
        dispathFunction({ type: "FETCH_FAILURE", payload: error });
      });
  }, []);

  return (
    <div>
      <h1> {state.error ? state.error : null} </h1>
      <ul>
        {state.loading ? "loading..." : null}
        {state.employees.map(employee => {
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

export default UseReducerEmployeeDataRepository;
