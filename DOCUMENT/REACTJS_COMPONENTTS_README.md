# Components 
> component is smaill unit of the functionality which is self contained 
--- 

## Functional Component 
* Js Fucntion and optinally recieved a object of props 
* return html which is descibe a ui 
* Example 
---
* Wish.js
```
import React from 'react'
const Wish = () =>  <h1> Welcome to the Espark</h1>
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
      <Wish/>
    </div>
  );
}
export default App;
```

---

## Class Components 
* Es6 classes and optinally recieved a object of props 
* it can maintaine the private intnal state 
* return html which is descibe a ui 
* this is extended from React.Component class 
* it has render() method which return the htmnl as ui or null 
---
* Example 
* Welcome.js
```
import React from 'react'

class Welcome extends React.Component{
    render(){
        return <h1> Welcome {prop.name} </h1>
    }
}
```

* App.js
```
import React from 'react'
import './App.css';
import Welcome from './components/Wish'
function App() {
  return (
    <div className="App">
      <Welcome/>
    </div>
  );
}
export default App;
```
---

### NOTE 

### Default Export 
* with defulat export we have chagne the Component
name in the caller class with some other name also 

```
import React from 'react'
const Wish = () =>  <h1> Welcome to the Espark</h1>
export default Wish

```

```
import React from 'react'
import Espark from './components/Wish'
function App() {
  return (
    <div className="App">
      <Espark/>
    </div>
  );
}
```

----

### Name Export 
* with name export we can't change the name of the component 
in the call class with some other name we have to use 
the same Component name always 

```
import React from 'react'
export const Wish = () =>  <h1> Welcome to the Espark</h1>
```

```
import React from 'react'
import Wish from './components/Wish'
function App() {
  return (
    <div className="App">
      <Wish/>
    </div>
  );
}

```