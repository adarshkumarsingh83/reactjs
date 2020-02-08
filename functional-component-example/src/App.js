import React from 'react';
import './App.css';
import Wish from './components/Wish'
import Es6Wish from './components/Es6Wish'
import JsxWish from './components/JsxWish'

function App() {
  return (
    <div className="App">
      <Wish/>
        <br/>
      <Es6Wish/>
      <br/>
      <JsxWish/>
    </div>
  );
}

export default App;
