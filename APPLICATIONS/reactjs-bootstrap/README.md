# Reactjs-bootsrap 

---

### To Generate the application 
* $ create-react-app reactjs-bootstrap 

### Clean  up default application 
* proj/public/logo192.png 
* proj/public/logo512.png 
* proj/public/index.html 
    ```
    #Cleanup from proj/public/index.html 
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    ```
* proj/public/manifest.json
    ```
    #Cleanup from proj/public/manifest.json
        {
          "src": "logo192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "logo512.png",
          "type": "image/png",
          "sizes": "512x512"
        }
    ```
* proj/src/App.css
    ```
    .App {
      text-align: center;
    }
    clean the css class file which is not used 
    ```
* proj/src/logo.svg
* proj/src/App.js
    ```
    #Cleanup in proj/src/App.js
    import logo from './logo.svg';
    and 
    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
    ```
### To Install Bootstrap 
* $ npm install bootstrap --save

### import the bootstrap in index.js 
* proj/src/index.js
    ```
    # add below import statement in index.js 
    import 'bootstrap/dist/css/bootstrap.css';
    ```
### Add the boostrap class 
* proj/src/App.js
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

### To Buld the application 
* $ npm run build 

### To Start Application 
* $ npm start

### Application url 
* http://localhost:3000

### To Reimport 
* $ npm i 

### To Brek Exeuction 
* crt + c 