
# REACTJS 
---

* java script 
```
this keyword ,filter ,map and reduce 
```

* ES6 
```
let and const , awwor function , templatge literals , default param ,object literals , rest and spread operation and destructuring assignment 

https://www.youtube.com/watch?v=n3zrCxB8sj8&list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV

```

* $ npx create-react-app <'react-application'>
* $ cd <'react-application'>
* $ npm start
* $ npm run build
* $ npm start

### Component
---
```
Stateless functional component 
-> java script function 

function Welcome(prop){
    return <h1> Welcome {prop.name} </h1>
}
```

----

### Stateful Class component 
* -> Class extends Component class 
* -> Render method returing html 

```
class Welcome extends React.Component{
    render(){
        return <h1> Welcome {prop.name} </h1>
    }
}

```

---

#### Ex default export and import with different name and use it 
```
Wish.js
import React from 'react'
const Wish = () =>  <h1> Welcome to the Espark</h1>
export default Wish

App.js
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

OR 

App.js
import React from 'react'
import './App.css';
import MyWish from './components/Wish'
function App() {
  return (
    <div className="App">
      <MyWish/>
    </div>
  );
}
export default App;
```

### Ex named export and import with same name and use it 

```
Wish.js
import React from 'react'
export const Wish = () =>  <h1> Welcome to the Espark</h1>

App.js
import React from 'react'
import './App.css';
import {Wish} from './components/Wish'
function App() {
  return (
    <div className="App">
      <Wish/>
    </div>
  );
}
export default App;
```
* rfce => func 
* rce => class , rconst