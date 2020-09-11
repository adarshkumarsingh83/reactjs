# Reactjs Pure Component 
> pure component doesn't render every time without changeing the state or props of the component 
---


### Regular componentt 
* implement shoudlComponentUpdate() always reutrn true by default 
* which render the component without the props/ state change 
* [REACTJS COMPONENT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/react-pure-component)


## Pure component is in Class component 

### Pure component
* implement shoudlComponentUpdate() always reutrn based in props/ state change comparsion
* shallow comparsion (sc)
	* sc of prevState with currentState 
	* sc of preProps with currentProps
* which render the component only when their is the props/ state change 
	*  it do shallow comparsion internally for 
		* primitive types 
			* return true if a and b have the same value 
		* complex type 
			* return true if a and b are referenceing to same object 
* [REACTJS PURE COMPONENT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/react-pure-component)

```
import React, { PureComponent } from "react";

class XxxxPureComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("XxxxPureComponent render()");
    return <h1>{this.props.name}</h1>;
  }
}

export default XxxxPureComponent;
```

## Functional Component 
* memo is used for functional component in reactjs for achivveing the same 
* [REACTJS MEMO COMPONENT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-memo-component)