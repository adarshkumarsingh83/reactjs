import React from "react";
import address from "../store/address_default.json";

const AddressDataContext = React.createContext(address);

const AddressDataContextConsumer = AddressDataContext.Consumer;

const AddressDataContextProvider = AddressDataContext.Provider;

export { AddressDataContextConsumer, AddressDataContextProvider };

export default AddressDataContext;
