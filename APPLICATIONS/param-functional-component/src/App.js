import React from 'react';
import './App.css';
import Wish from './components/Wish'
import Es6Wish from './components/Es6Wish'
import MyWish from './components/MyWish'
import YourWish from './components/YourWish'

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
      <br />
      <br />
      <Es6Wish firstName='Adarsh' lastName='kumar'>
        inner child of adarsh es6 wish tag
        </Es6Wish>
      <br />
      <Es6Wish firstName='Radha' lastName='singh'>
        inner child of radha es6 wish tag
        </Es6Wish>
      <br />
      <br />
      <MyWish firstName='Adarsh' lastName='kumar' />
      <br />
      <YourWish firstName='Adarsh' lastName='kumar' />
    </div>
  );
}

export default App;
