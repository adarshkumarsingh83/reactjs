# Reactjs Refs 
> refs helps to hold the references of the dom elements and use it for puropse 

---


## Refs steps 

* [REACTJS REFS EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-refs)

* create a refs in constructor using React.createRef();
```
 this.inputRef = React.createRef();
```

* bind the refs with dom elements 
```
<input type="text" ref={this.inputRef} />
```

* use the refs for purpose 
```
componentDidMount = () => {
  this.inputRef.current.focus();
};
```

## Refs with class 
* [REACTJS REFS WITH PAREENT CHILD COMPONENT EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/blob/master/APPLICATIONS/reactjs-class-ref)
