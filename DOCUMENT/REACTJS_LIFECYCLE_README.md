
### To install the react create application util 
* $ npm install -g create-react-app

### to use util for first application 
* $ npx create-react-app <'myfirstreact'>

### to get inside the application 
* $ cd myfirstreact

### to start the application 
* $ npm start

### to access the application on browser 
* http://localhost:3000/

---
### LIFE CYCLE METHOD 
---

### MOUNTING 
* [COMPONENT MOUNTING LIFECYCLE EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/component-mounting-lifecycle)
```
when a instance of the component is being created and inserted  into the dom 
4 method in this phase 
a. constructor(props){
       super(props)
       this.state={
            key:value
       }
  } 
 - init state or binding events 
 - directly can set the state 
 
b.static getDerivedStateFromProps(props,state) 
  - must return null or object which represent updated state of the component
  - call everytime when component is re render
   - this.setState({
    key:value
  })

c.render()
 - mandatory method in class component 
 - read props and state and return jsx for component 

d.componentDidMount()
 - called only once in life cycle,
 - call immediately after component and its child components have been render to the dom 
 - best place to call rest api call or external call to load the data. 
```

### UPDATING 
* [COMPONENT UPDATING LIFECYCLE EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/component-updating-lifecycle)
```
when a component is being re-rendered as the result of the change to the props or state 
5 method in this 
a. static getDerivedStateFromProps(props,state)
   - must return null or object which represent updated state of the component
   - call every time when component is re render
   

b.shouldComponentUpdate(nextProps,nextState)
  - return true or false for stopping or non stopping of the component re render 
  - compare the props and state values and return true false for re render or not 
  - performance optimization method and very rarely used

c.render()
  - mandatory method in class component 
  - read props and state and return jsx for component 

d.getSnapshotBeforeUpdate(prevProps,prevState)
   - it read the current dom state and return a value or null
   - just call before when virtual dom is about the reflect the changes 
   - helpful to capture the some info from dom and do some calculation.
   
e.componentDidUpdate(prevProps,prevState,snapshot)
  - called only once when component and child's component re-render completely after the update 
     in the state or component.  
  - or after completing re-render cycle of component and its children 
  - this will return a value or null  
  - snapshot is the return value of the getSnapshotBeforeUpdate(prevProps,prevState) method.
``` 
  

### UNMOUNTING 
```
when a component is being removed from the dom 
1 method only 
componentWillUnmount()
 - called just before component is unmount and destroyed
 - good for clean up activity 
 - not to call setState method in this 
```
 

### ERROR HANDLING 
```
when their is error during a rendering in a life cycle method 
or in a constructor of any child component 
2 method
a.static getDerivedStateFromError()
b.componentDisCatch()
- call when their is error in rendering 
  or in a lifecycle method or constructor of any child component 
  
```

---
### REACTJS HOOKS 
---
* 1.useState
* 2.useEffect
* 3.useContext
* 4.useReducer
* 5.useCallback
* 6.useMemo
* 7.useRef




