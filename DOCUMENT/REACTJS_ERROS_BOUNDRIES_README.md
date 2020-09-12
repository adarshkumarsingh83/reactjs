# Reactjs Erros Boundries 
> when any component is failed to load due to exception then catch or fallback to exeucte to handle the ui

---

## [ERROR BOUNDRIES EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-error-boundary)

### Reactjs Error Boundary 
> when component failed to load then to perform error handling 
> when ever the error occurs in main component error boundries will be executed as the catch fallback code 
---
### Main Component 
```
import React from "react";
class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user.id === -1) {
      throw new Error("Not A Valid User Data");
    }
    return (
      <React.Fragment>
        <ul className="ul" id="user" key={this.props.user.id}>
          {this.props.user.id} &nbsp;&nbsp;
          {this.props.user.firstName} &nbsp;&nbsp;
          {this.props.user.lastName}&nbsp;&nbsp;
          {this.props.user.email}
        </ul>
      </React.Fragment>
    );
  }
}
export default Row;
```
### Create a Error Boundries 
```
import React from "react";
class XxxErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError = error => {
    return {
      hasError: true
    };
  };

  componentDidCatch = (error, info) => {
    console.log(`${error}  = ${info}`);
  };

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
           // cod for showing in case of error 
        </React.Fragment>
      );
    } else {
      return this.props.children;
    }
  }
}
export default XxxErrorBoundary;
```

### Code where error boundries are used 
* encapuslate the actual component call with in error boundries 
```
import React from "react";
import Row from "./Row";
import XxxErrorBoundary from "./XxxErrorBoundary";
import users from "../store/users.json";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>USER INFORMATION </h1>
        {users.map(user => (
          <XxxErrorBoundary user={user}>
            <Row user={user} />
          </XxxErrorBoundary>
        ))}
      </div>
    );
  }
}
export default UserList;
``` 

# NOTE click on cross button on browser when its showing error so actuall ui will be visiable