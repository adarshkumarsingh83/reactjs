# Event Handling 
--- 

* App.js 

```
import React from 'react'
import './App.css';
import Click from './components/Click'
function App() {
  return (
    <div className="App">
     <Click/>
    </div>
  );
}
export default App;
```

## Functional Component 
* [Example](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/function-event-handler)
```
import React from 'react'

function Click(){

	function changeMessage(){

		this.props.message: "welcome to espark"
	}

	return (
        	<div>
        	  <h1>{this.state.message} </h1>
        	  <button onClick={ () -> this.changeMessage() }> visit </button>
        	<div>
        )
}


```

## Class Component 
* [Example](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/class-event-handler)
```
import React from 'react'

class Click extends React.Component{

   constructor(){
   	super()
	   	 this.state = {
	        message:'welcome visitor'  
	   	 }
   }

    changeMessage(){

          this.setState({
          	     message:'Thanks for visit'
          })

    }

    render(){
        return (
        	<div>
        	  <h1>{this.state.message} </h1>
        	  <button onClick={ () -> this.changeMessage() }> visit </button>
        	<div>
        )
    }
}

```
