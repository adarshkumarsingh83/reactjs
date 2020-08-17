# Reacthjs Destructureing 
* Expanding the internal values to the variables 
* can be done for object haivng multiple props 
* arrays of values 
* state object with one or multiple values 

--- 
## Functional Component 
* Wish.js
``
import React from 'react'
const Wish = ({firstName,lastName}) => {
      return <h1> Welcome to the Espark {firstName} {lastName}</h1>	
} 
export default Wish
```


``
import React from 'react'
const Wish = (props) => {
	const {firstName,lastName} = props ;
      return <h1> Welcome to the Espark {firstName} {lastName}</h1>	
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
      <Wish firstName="adarsh" lastName="kumar"/>
    </div>
  );
}
export default App;
```

## Class Component 
* Wish.js 
```
import React from 'react'

class Wish extends React.Component{

    render(){
    	const {firstName,lastName} = this.props ;
        return <h1> Welcome to the Espark {firstName} {lastName}</h1>	
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
      <Wish firstName="adarsh" lastName="kumar"/>
    </div>
  );
}
export default App;
```

### Example 

* Wish.js 
```
import React from 'react'

class Counter extends React.Component{

   constructor(){
   	super()
	   	 this.state = {
	        count:0
	   	 }
   }

    changeCount(){

          	this.setState((prvState,props)=>{
          		const { prvCount } = this.prvState.count;
          		const { currentCount } = this.state.count;
                count: prvCount+1
          		},() => {
          	             console.log('call bacck',currentCount)
          	           }
          	 )

    }

    render(){
        return (
        	<div>
        	  <h1>{this.state.count} </h1>
        	  <button onClick={ () -> this.changeCount() }> count </button>
        	<div>
        )
    }
}
```