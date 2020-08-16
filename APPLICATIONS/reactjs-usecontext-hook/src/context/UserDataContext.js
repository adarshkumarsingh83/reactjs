import React from "react";
import users from "../store/default_users.json";

const UserDataContext = React.createContext(users);

const UserDataContextConsumer = UserDataContext.Consumer;

const UserDataContextProvider = UserDataContext.Provider;

export { UserDataContextConsumer, UserDataContextProvider };

export default UserDataContext;
