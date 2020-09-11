# REACTJS hooks 
> hooks let the use of state and other react feture without writing a class component 

---

* import the useState Hook 
```
 import { useState } from 'react';
```

* use in function component
```
  const  functionName = () => {

    const [varName , setVarName] = useState(initValueOfVar);

    return (

         <div>
                  {varName}
         </div>
    );

  }
``