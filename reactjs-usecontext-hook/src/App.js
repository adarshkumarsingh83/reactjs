import React from "react";
import "./css/App.css";

import TableComponent from "./components/TableComponent";
import users from "./store/users.json";
import address from "./store/address.json";
import { UserDataContextProvider } from "./context/UserDataContext";
import { AddressDataContextProvider } from "./context/AddressDataContext";

function App() {
  return (
    <div className="App">
      <div>
        <UserDataContextProvider value={users}>
          <AddressDataContextProvider value={address}>
            <TableComponent heading="NON DEFAULT - " />
          </AddressDataContextProvider>
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
