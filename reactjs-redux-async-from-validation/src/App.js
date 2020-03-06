import React from "react";
import "./css/App.css";
import { Provider } from "react-redux";
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
            Usernames that will <em>fail</em> validation: <code>adarsh</code>,{" "}
            <code>radha</code>, <code>sonu</code> or <code>monu</code>.
          </p>
          <AsyncValidationForm onSubmit={showResults} />
        </div>
      </Provider>
      ,
    </div>
  );
}

export default App;
