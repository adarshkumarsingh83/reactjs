# Reactjs context 
> To share the data to react components whare are in deep nested hicharcy 

---

## [REACTJS CONTEXT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-context)

* in the example same component is used twice in app component in one place data is shared from top level component to the child level 
* in the other place it has been used directly in the deep level at child component using the context 
* context can be created with defualt value and while using provider we can override that by passing new vlue 
* when we are not using provider then it will take defualt value from the provider in consumer call otherwise the new ovverride value supplied to the provider

### Create a Reactjs Context 
```
import React from "react";
import users from "../store/default_users.json";

const UserDataContext = React.createContext(users);
const UserDataContextConsumer = UserDataContext.Consumer;
const UserDataContextProvider = UserDataContext.Provider;

export { UserDataContextConsumer, UserDataContextProvider };
export default UserDataContext;
```

### component hicharchy 
```
import React from "react";

class ColumnComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul key={this.props.user.id}>
          <h3>
            {this.props.user.id} &nbsp;&nbsp;
            {this.props.user.firstName} &nbsp;&nbsp;
            {this.props.user.lastName}&nbsp;&nbsp;
            {this.props.user.email}
          </h3>
        </ul>
      </React.Fragment>
    );
  }
}

export default ColumnComponent;
```

* context is used directly for data sharing 
```
import React from "react";
import ColumnComponent from "./ColumnComponent";
import { UserDataContextConsumer } from "../context/UserDataContext";
class RowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserDataContextConsumer>
        {users => users.map(user => <ColumnComponent user={user} />)}
      </UserDataContextConsumer>
    );
  }
}
export default RowComponent;
```

```
import React from "react";
import RowComponent from "./RowComponent";
class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.heading} USER INFORMATION </h1>
        <RowComponent />
      </div>
    );
  }
}
export default TableComponent;
```

### app component from where two times same component is used with context and without context 
```
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
```