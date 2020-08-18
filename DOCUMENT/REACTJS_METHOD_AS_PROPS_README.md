
# METHOD AS PROP 
> Parent component will call Child component from render method and pass the \
> parent method refrence to the child component as the props which is furhter \
> invoke by child component using props and passing param to the method.
---

* [METHOD AS PROP EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-method-as-props)

* WishMessage.js
```
import React from "react";
import Message from "./Message";

class WishMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parent"
    };
  }

  wish = name => {
    alert(`handle by '${this.state.name}' origin of event by '${name}'`);
  };

  render() {
    return (
      <div>
        <Message wishHandler={this.wish} />
      </div>
    );
  }
}

export default WishMessage;
```

* Message.js
```
import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.wishHandler("child")}>WISH</button>
      </div>
    );
  }
}

export default Message;
```

* App.js 
```

import React from "react";
import WishMessage from "./components/WishMessage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WishMessage />
    </div>
  );
}

export default App;
```