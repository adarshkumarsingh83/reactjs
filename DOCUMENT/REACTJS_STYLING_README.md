# Reactjs Styling 

---

## Css stylesheets 
## [REACTJS CSS STYLING EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-css-style)
* Create css file 
	* proj/src/style/myStyle.css
	
```
.primary {
  color: red;
}

.secondry {
  color: green;
}

.myFont {
  font-size: 72px;
  font-style: italic;
  font-family: cursive;
}
```

* apply the style in component 
```
import "../style/myStyle.css";

class Wish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleClassName: ""
    };
  }
  render() {
    let className = this.props.styleClassName;
    return (
      <div>
        <h1 className={`${className} myFont`}>WELCOME TO THE ESPARK</h1>
      </div>
    );
  }
}
export default Wish;
```


## Inline styleing

## [REACTJS INLINE STYLING EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-css-style)

* deffien the style in component and use it their 
```
import React from "react";

class InLineStyle extends React.Component {
  
    constructor() {
    super();
    this.myStyle = {
      color: "red",
      fontSize: "72px",
      fontStyle: "italic"
    };
  }

  render() {
    return (
      <div>
        <h1 style={this.myStyle}>WELCOME TO THE INLINE STYLE </h1>
      </div>
    );
  }
}

export default InLineStyle;
```

## Css Module 

## [REACTJS CSS MODULE STYLING EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-css-style)

* Create css file 
	* proj/src/style/myStyle.module.css
```
.wishMessage {
  color: blue;
  font-size: 72px;
}
```
* use the css module in the component 
```
import React from "react";
import styles from "../style/myStyle.module.css";
class ModuleStyle extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.wishMessage}>REACT MODULE CASS</h1>
      </div>
    );
  }
}
export default ModuleStyle;
```


## Bootstrap f/w 
## [BOOTSTRAP REACTJS EXAAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-bootstrap)
* To Install Bootstrap
	* $ npm install bootstrap jquery propper propper.js --save
* import the bootstrap in index.js
	* proj/src/index.js
```
	# add below import statement in index.js 
	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap/dist/js/bootstrap.min.js'
	import 'jquery/dist/jquery.min.js';
```

* use the bootstrap in the components 
```
import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <div class="container">
          <div class="jumbotron">
              <div class="alert alert-primary" role="alert">
                  <h4 class="display-3">WELCOME TO ESPARK</h4>
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;
```

