# React + Vite

- to create structure

* npm create vite@latest my-reacts-jsx-example

```
1.index.hmtl contains <div> with root id " <div id="root"></div>"
2. main.jsx which contains this below code to find root div for rendering App Component
"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"
3.App.jsx which will start the rending the Welcome component
"
import './App.css'
import Welcome  from './component/welcome'

function App() {

  return (
    <>
      <Welcome />
      </>
  )
}
export default App
"

4.Welcome.jsx will render the h1 tag with data to display
"
const Welcome = () => {
    return (
        <>
            <h1> welcome to the react and vite example </h1>
     </>
    )
}

export default Welcome;
"
```

- to build

* npm install

- To run

* npm run dev
