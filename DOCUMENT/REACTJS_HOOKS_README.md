# REACTJS hooks 
> hooks let the use of state and other react feture without writing a class component 

---
## Hooks types 
* useState 
* useeffect
* useContext
* useref
* usereducers
* usecallback 
* customhook 

### Don't call hooks inside loops conditons or nested functions 
### Ony call hooks from reacts functtional component not from regualr js 

---

### [REACTJS USESTATE HOOK BASIC EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-hook-usestate)
### [REACTJS USESTATE HOOK OBJECT EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-hook-usestate-object)
### [REACTJS USESTATE HOOK ARRAY EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-hook-usestate-array)
### [REACTJS USESTATE HOOK FUNCTIONAL PARAM EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-hook-usestate-funtionparm)

* useState hook setXxx() will not merge the previous state of object or array we have to do manually 
* import the useState Hook 
```
 import { useState } from 'react';
```

* use in function component
```
  const  functionName = () => {
    const [varName , setVar] = useState(initValueOfVar);

    doOperaton = () =>{
           setVar(prevVarName => { prevVarName + 1 } );
    }

    return (
         <div>
            {varName}
         </div>
    );
  }

```

---

### [REACTJS USECONTEXT HOOK EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-usecontext-hook)

---

### [REACTJS USEEFFECT HOOK BASIC EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-hook-useeffect)
### [REACTJS USEEFFECT HOOK CONDITIONAL RENDERING EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-hook-useeffect-conditional-rendering)

---

### [REACTJS USERREDUCER HOOK EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-usereducers-hook)
### [REACTJS USEREDUCER MULTI HOOK EXAMPLE ](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-usereducers-multit-hook)
### [REACTJS USEREDUCER COMPLEX OBJECT HOOK EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-usereducers-complex-object-hook)
### [REACTJS USEREDUCER CONTEXT HOOK EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-usereducers-context-hook)

---

### [REACTJS USECALLBACK HOOK EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-usecallback-hook)

---

### [REACTJS USEREF HOOK EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/rectjs-useref-hook)

---

### [REACTJS CUSTOM HOOK BASIC EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-custom-hook-counter)
### [REACTJS CUSTOM HOOOK INPUTFIELD](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-custom-hook-inputfield)
### [REACTJS CUSTOM HOOK DATA FETCH EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-custom-hook-data-fetch)