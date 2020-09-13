import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import SearchEmployeeComponent from './components/SearchEmployeeComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
            <div class="alert alert-primary" role="alert">
              <h4 class="display-3">Application</h4>
            </div>
            <ListEmployeeComponent/>
            <SearchEmployeeComponent/>
        </div>
    </div>
  );
}

export default App;
