import React from "react";
import ColumnComponent from "./ColumnComponent";
import { UserDataContextConsumer } from "../context/UserDataContext";
import AddressDataContext from "../context/AddressDataContext";
import UserDataContext from "../context/UserDataContext";

const RowComponent = () => {
  const users = React.useContext(UserDataContext);
  const address = React.useContext(AddressDataContext);
  return users.map(user => (
    <ColumnComponent key={user.id} user={user} address={address} />
  ));
};

export default RowComponent;
