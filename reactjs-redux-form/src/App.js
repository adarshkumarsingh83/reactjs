import React from 'react';
import './css/App.css';
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import showResults from "./components/showResults";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div className="App">

    <Provider store={store}>
    <div style={{ padding: 50 , justifyContent:'center', alignItems:'center'}}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div>
  </Provider>
  </div>
  );
}

export default App;
