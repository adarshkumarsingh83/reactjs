# Render Props Designe pattern 
> ita a technique to share the code between react components using props where the props value is a function itself. 

---

## [REACTJS RENDER PROPS EXAPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-render-props-dp)

### Crate a render props component 
```
import React from "react";
class RenderPropComponent extends React.Component {
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
        stars: (prevState.count + 1) * 2
      };
    });
  };

  render() {
    return (
      <div>
        {this.props.render(
          this.state.count,
          this.state.stars,
          this.countSubmit
        )}
      </div>
    );
  }
}
export default RenderPropComponent;
```

### Use the capability of render props in normal components 
```
import React from "react";
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
export default ComplaintComponent;
```

```
import React from "react";
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
export default FeedBackComponent;
```

### Share the render props component from app components to the other components 
```
import React from "react";
import "./css/App.css";
import FeedBackComponent from "./components/FeedBackComponent";
import ComplaintComponent from "./components/ComplaintComponent";
import RenderPropComponent from "./components/RenderPropComponent";

function App() {
  return (
    <div className="App">
      <div>
        <div className="first-div">
          <RenderPropComponent
            render={(count, stars, countSubmit) => (
              <FeedBackComponent
                count={count}
                stars={stars}
                countSubmit={countSubmit}
              />
            )}
          />
        </div>
        <div className="second-div">
          <RenderPropComponent
            render={(count, stars, countSubmit) => (
              <ComplaintComponent
                count={count}
                stars={stars}
                countSubmit={countSubmit}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
```