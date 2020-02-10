import React from "react";
import "./css/App.css";
import TableComponent from "./components/TableComponent";
import users from "./store/users.json";
import { UserDataContextProvider } from "./context/UserDataContext";

function App() {
  return (
    <div className="App">
      <div>
        <UserDataContextProvider value={users}>
          <TableComponent heading="NON DEFAULT - " />
        </UserDataContextProvider>
      </div>
      <br />
      <br />
      <div>
        <TableComponent heading="DEFAULT - " />
      </div>
    </div>
  );
}
export default App;
