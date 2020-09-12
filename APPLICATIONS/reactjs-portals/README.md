# Reactjs Portal Root 
> create a root element other then app for ui 
> even though portal component is configured in app.js under the app div
> but once it will render it will render in portal root element 

---

### Create a root element 
* proj/public/index.html 
```
<div id="portal-root" class="App"></div>
```

### Create a component 
```
import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = () => {
  return ReactDOM.createPortal(
    <dov>
      <h1>REACT PROTAL COMPONENT </h1>
    </dov>,
    document.getElementById("portal-root")
  );
};
export default PortalComponent;
```
### configure the Component in app.js 
* proj/src/app.js
```
import React from "react";
import "./css/App.css";
import WishComponent from "./components/WishComponent";
import PortalComponent from "./components/PortalComponent";

function App() {
  return (
    <div className="App">
      <WishComponent />
      <PortalComponent />
    </div>
  );
}

export default App;
```

### To Build the Application  
* npm run build

### To Execute the application 
* npm start

