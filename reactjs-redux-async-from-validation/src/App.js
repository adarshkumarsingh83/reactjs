import React from "react";
import "./css/App.css";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./components/store";
import showResults from "./components/showResults";
import AsyncValidationForm from "./components/AsyncValidationForm";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div style={{ padding: 15 }}>
          <h2>Asynchronous Validation</h2>
          <p>
            Usernames that will <em>fail</em> validation: <code>john</code>,{" "}
            <code>paul</code>, <code>george</code> or <code>ringo</code>.
          </p>
          <AsyncValidationForm onSubmit={showResults} />
          <Values form="asyncValidation" />
        </div>
      </Provider>
      ,
    </div>
  );
}

export default App;
