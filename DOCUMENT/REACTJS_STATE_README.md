# State 
--- 

### Props 
* props passes to the component 
* its a functional paramater 
* props are immutable 
* it can be for class compoenet or functinal component 

### Sate 
* its managed with in the component 
* variable diclaration in the functional body 
* sate can be changed 
* useState hook for funtional component 
* this.sate for the Class component 



### IN Class component 
* 

```
import React from 'react'

class Wish extends React.Component{

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

```
import React from 'react'
import './App.css';
import Wish from './components/Wish'
function App() {
  return (
    <div className="App">
     <Wish/>
    </div>
  );
}
export default App;
```