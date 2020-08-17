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
* never modified the sate directly use setState() 



### IN Class component 
* [EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/state-class-component)
* [EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/state-class-component-example)

* Wish.js 

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

* App.js 

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

### setState() 

* Counter.js 
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
                  count: prevState.count+1
          		},() => {
          	 console.log('call bacck',this.state.count)
          	})

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

* App.js 

```
import React from 'react'
import './App.css';
import Counter from './components/Counter'
function App() {
  return (
    <div className="App">
     <Counter/>
    </div>
  );
}
export default App;
```