

import './App.css';
import TableComponent from './component/TableComponent';
import GridComponent from './component/GridComponent';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        <GridComponent />
        <br/>
        <TableComponent />
      </header>
    </div>
  );
}

export default App;
