
import './App.css';
import TopComponent from './components/TopComponent.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopComponent name="adarsh kumar" >
          <b> child tag </b>
        </TopComponent>
      </header>
    </div>
  );
}

export default App;
