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
* [Example](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-binding-event-handling)
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
            <button onClick={changeMessage}> visit </button>
          <div>
        )
}


```

--- 

## Class Component 
* binding the this keyword with the event 
* it will render every time the component 
* perforamce impact 
```
import React from 'react'

class Click extends React.Component{

   constructor(){
    super(props)
    this.state = {
          message:'welcome visitor'  
       }     
   }

    changeMessage(){
      this.setState({
        message:"welcome to the espark"
      })
    }

    render(){
        return (
          <div>
            <h1>{this.state.message} </h1>
            <button onClick={this.changeMessage.bind(this) }> visit </button>
            or
            <button onClick={() => this.changeMessage() }> visit </button>
          <div>
        )
    }
}

```
---

```
import React from 'react'

class Click extends React.Component{

   constructor(){
    super(props)
    this.state = {
          message:'welcome visitor'  
       }       
    this.changeMessage = this.changeMessage.bind(this)   
   }

   changeMessage {

        this.setState({
           message:"welcome to the espark"
        })
    }

    render(){
        return (
          <div>
            <h1>{this.state.message} </h1>
              <button onClick={() => this.changeMessage() }> visit </button>
          <div>
        )
    }
}

```

---

```
import React from 'react'

class Click extends React.Component{

   constructor(){
    super(props)
    this.state = {
          message:'welcome visitor'  
       }
   }

    changeMessage = () =>{
      this.setState({
         message:"welcome to the espark"
      })
    }

    render(){
        return (
          <div>
            <h1>{this.state.message} </h1>
              <button onClick={this.changeMessage}> visit </button>
          <div>
        )
    }
}

```

---

* [Example](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/class-event-handler)
* using react autobinding 
```
import React from 'react'
import autoBind from 'react-autobind'

class Click extends React.Component{

  constructor(){
   	super(props)
    autoBind(this)
	  this.state = {
	    message:'welcome visitor'  
	  }
  }

  changeMessage (){
    this.setState(state->({
       message:"welcome to the espark"
    }))
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
