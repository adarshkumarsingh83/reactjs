import React from 'react';
import './App.css';
import Wish from './components/Wish'
import MyWish from './components/MyWish'

function App() {
  return (
    <div className="App">
      <Wish firstName='Adarsh' lastName='kumar'>
        inner child of adarsh wish tag
        </Wish>
      <br />
      <Wish firstName='Radha' lastName='singh'>
        inner child of radha wish tag
        </Wish>
      <br/>
     <MyWish firstName='Radha' lastName='singh'/>
    </div>
  );
}

export default App;
