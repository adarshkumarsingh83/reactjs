import React from 'react';
import './css/App.css';
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import showResults from "./components/showResults";
import WizardForm from "./components/WizardForm";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <div style={{ padding: 100 }}>
          <h2>Wizard Example</h2>
          <WizardForm onSubmit={showResults} />
          </div>
       </Provider>
    </div>
  );
}

export default App;
