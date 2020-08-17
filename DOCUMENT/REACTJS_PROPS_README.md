# Props 
* props are param pass to the componentt form the caller 
* props are immutable in nature 
--- 

## Functional Components 
* [EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/param-functional-component
)

* Wish.js 
```
import React from 'react'

const Wish = (props ) => { 
	  return (
	  	 <div>
	      <h1> Welcome to the Espark {props.name}</h1>
	      <h2>{props.children}</h2>
	     <div>
	  	) 
}
export default Wish

```

* App.js 

```

import React from 'react'
import './App.css';
import Wish from './components/Wish'
function App() {
  return (
    <div className="App">
      <Wish name='adarsh kumar'/>
      <Wish name='radha'>
          <p> some things </p>
      </Wish
    </div>
  );
}
export default App;
```


### Class Component 
* [EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/param-class-component)

* Wish.js
```
import React from 'react'

class Wish extends React.Component{
    render(){
        return (
        	<div>
        	  <h1> Welcome {this.props.name} </h1>
        	   <h2>{this.props.children}</h2>
        	<div>
        	)
    }
}
```

* App.js 

```
import React from 'react'
import './App.css';
import Wish from './components/Wish'
function App() {
  return (
    <div className="App">
     <Wish name='adarsh kumar'/>
      <Wish name='radha'>
          <p> some things </p>
      </Wish
    </div>
  );
}
export default App;
```
