# Reactjs Hight Order Component 
> to share the same code in mutliple component irrespective of the hicharcy of the component in componnt tree 

---

## [HOE COMPONENT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-higher-order-component-dp)

###  Crete a Hoe component with common functionality which is requried in other components 
```
import React from "react";

const HOComponent = (OriginalComponent, startCounter) => {
  class CounterEnableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        stars: 0
      };
    }

    countSubmit = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
          stars: prevState.count + 1 * startCounter
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          stars={this.state.stars}
          countSubmit={this.countSubmit}
          {...this.props}
        />
      );
    }
  }
  return CounterEnableComponent;
};

export default HOComponent;
```

### Use the Hoe component functionaliy in the other component 
```
import React from "react";
import HOComponent from "./HOComponent";

class ComplaintComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Complaint Count {this.props.count}</h1>
            <h2>Start {this.props.stars}</h2>
        <div>
          <label>Enter the Name</label>&nbsp;
          <input type="text" />
        </div>
        <div>
          <label>Comments:</label>&nbsp;
          <textarea />
        </div>
        <button onClick={this.props.countSubmit}>submit </button>
      </React.Fragment>
    );
  }
}
export default HOComponent(ComplaintComponent, 3);
```

```
import React from "react";
import HOComponent from "./HOComponent";

class FeedBackComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Feedback Count {this.props.count}</h1>
        <h2>Start {this.props.stars}</h2>
        <div>
          <label>Enter the Name</label>&nbsp;
          <input type="text" />
        </div>
        <div>
          <label>Comments:</label>&nbsp;
          <textarea />
        </div>
        <button onClick={this.props.countSubmit}>submit </button>
      </React.Fragment>
    );
  }
}
export default HOComponent(FeedBackComponent, 4);
```
### Use in the app.js 
```
import React from "react";

import "./css/App.css";
import FeedBackComponent from "./components/FeedBackComponent";
import ComplaintComponent from "./components/ComplaintComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="first-div">
          <FeedBackComponent />
        </div>

        <div className="second-div">
          <ComplaintComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
```


---

## [GENERIC HOE COMPONENT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-generic-higher-order-component-dp)

### Define the HOE component 

```
import React from "react";
import configuration from "../store/configuration.json";

const HOComponent = OriginalComponent => {
  class CounterEnableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        stars: 0
      };
    }

    countSubmit = () => {
      const startCounter = configuration[this.props.name];
      console.log(startCounter);
      this.setState(prevState => {
        const { name } = this.props;
        return {
          count: prevState.count + 1,
          stars: (prevState.count + 1) * startCounter
        };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          stars={this.state.stars}
          countSubmit={this.countSubmit}
          {...this.props}
        />
      );
    }
  }
  return CounterEnableComponent;
};
export default HOComponent;
```

### Use HOE in other component 
```
import React from "react";
import HOComponent from "./HOComponent";

class GenericComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.props.name} Count {this.props.count}
        </h1>
        <h2>Start {this.props.stars}</h2>
        <div>
          <label>Enter the Name</label>&nbsp;
          <input type="text" />
        </div>
        <div>
          <label>Comments:</label>&nbsp;
          <textarea />
        </div>
        <button onClick={this.props.countSubmit}>submit </button>
      </React.Fragment>
    );
  }
}
export default HOComponent(GenericComponent);
```

### Call the Component in App.js 
```
import React from "react";
import "./css/App.css";
import GenericComponent from "./components/GenericComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="first-div">
          <GenericComponent name="Generic Complaint" name="complaint" />
        </div>
        <div className="second-div">
          <GenericComponent name="Generic Enquery" name="enquery" />
        </div>
        <div className="third-div">
          <GenericComponent name="Generic Suggestion" name="suggestion" />
        </div>
      </div>
    </div>
  );
}
export default App;
```