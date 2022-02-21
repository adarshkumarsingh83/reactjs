# reactjs-serverside-event

---

## project creation

- $ npx create-react-app reactjs-server-side-event

```
Creating a new React app in /Users/us-guest/Desktop/reactjs-server-side-event.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> core-js@3.21.1 postinstall /Users/us-guest/Desktop/reactjs-server-side-event/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.21.1 postinstall /Users/us-guest/Desktop/reactjs-server-side-event/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ react-scripts@5.0.0
+ react-dom@17.0.2
+ react@17.0.2
+ cra-template@1.1.3
added 1381 packages from 618 contributors and audited 1381 packages in 43.88s

169 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Initialized a git repository.

Installing template dependencies using npm...
npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.0 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ @testing-library/jest-dom@5.16.2
+ @testing-library/user-event@13.5.0
+ @testing-library/react@12.1.3
+ web-vitals@2.1.4
added 38 packages from 108 contributors in 7.093s

169 packages are looking for funding
  run `npm fund` for details

Removing template package using npm...

npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.0 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

removed 1 package and audited 1418 packages in 4.82s

169 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Created git commit.

Success! Created reactjs-server-side-event at /Users/us-guest/Desktop/reactjs-server-side-event
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd reactjs-server-side-event
  npm start

Happy hacking!

```

## modify the app.js

- /reactjs-server-side-event/src/App.js

```
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


function App() {

  const [message, setMessage] = useState([]);

  const initMessage = () => {
    setMessage('welcome to the espark ');
  };

  useEffect(() => {
    initMessage();
    const eventSource = new EventSource(`http://localhost:8080/espark`);
    //eventSource.onmessage = (e) => setMessage(e.data);
    eventSource.onmessage = (e) => formatJsonMessage(e.data);
    return () => {
      eventSource.close();
    };
  }, []);

  const formatJsonMessage = (data) => {
    const messageData = JSON.parse(data);
    setMessage(messageData.msg);
  }

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
```

### To start the application

- npm start
- api url http://localhost:3000

### to build the code

- npm run build
