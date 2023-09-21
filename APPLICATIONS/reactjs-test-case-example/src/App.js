
import './App.css';
import Greeting from './component/Greating';
import Wish from './component/Wish';
import Greating  from './component/Greating';
import Table from './component/Table';

function App() {
  const data = [
    { name: "adarsh", age: 19, gender: "Male" },
    { name: "radha", age: 19, gender: "Female" },
    { name: "sonu", age: 25, gender: "Male" },
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> app component </h1>
        <Wish />
        <br />
        <Greating name={"adarsh kumar"} />
        <br />
        <Table data={data}/>

      </header>
    </div>
  );
}

export default App;
