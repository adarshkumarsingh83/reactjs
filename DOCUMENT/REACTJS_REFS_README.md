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
* code sinpet 
* create a ref in parent and like the ref to the child component 
```
import React from "react";
import InputComponent from "./InputComponent";
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.formComponentRef = React.createRef();
  }

  setFocusToInput = () => {
    this.formComponentRef.current.focusInput();
  };

  render() {
    return (
      <React.Fragment>
        <InputComponent ref={this.formComponentRef} formComponentRef />
        &nbsp;
        <button onClick={this.setFocusToInput}>FOCUS INPUT</button>
      </React.Fragment>
    );
  }
}
export default FormComponent;
```

* link the ref two the child component 
```
import React from "react";
class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <label> Enter the Value </label>&nbsp;
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default InputComponent;
```

## Refs Forwarding 
* [REACTJS REFS FORWARDING EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-ref-forwarding)
* code sinpat 
* create a ref in parent component and handler in parent component and link the ref with child component 
```
import React from "react";
import InputComponent from "./InputComponent";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleSubmit = () => {
    alert(this.inputRef.current.value);
  };
  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form onLoad={this.focusInput}>
        <div>
          <InputComponent ref={this.inputRef} /> &nbsp;
        </div>
        <button onClick={this.handleSubmit}>SUBMIT </button>
      </form>
    );
  }
}
export default FormComponent;
```

* link the ref to the child functional component using Reactt.forwardRef()
```
import React from "react";
const InputComponent = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <label>ENTER THE TEXT</label> &nbsp;
      <input type="text" ref={ref} />
    </React.Fragment>
  );
});
export default InputComponent;
```