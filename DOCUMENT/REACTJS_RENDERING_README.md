# Rendering 

---
* Conditional Rendering 
* [REACTJS_CONDITIONAL_RENDERING_EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/react-conditional-rendering)
 ```
  Rending the jsx based on some conditions evaluated into the render method and 
  resonse is render to the ui template 
  it can be done with if else switch or trinarty operator 
 ```

 * List Rendering 
 * [REACTJS_NODEJS_JSON_CLIENT_SERVER_EXAMPLE](https://github.com/adarshkumarsingh83/reactjs/tree/master/APPLICATIONS/reactjs-nodejs-example)
 ```
  import React from 'react';

  function ShowList{

      const names =["adarsh","radha","amit"];
      return(
            <div>
              {
              	names.map((name, index) => <h1 key={index}> {index} $nbsp; {name} </h1>)
              }
            </div>
      	)

  }

  export default ShowList;

 ```

---



