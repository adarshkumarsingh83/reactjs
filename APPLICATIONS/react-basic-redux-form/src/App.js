import React from "react";
import "./css/App.css";
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <div style={{ padding: 100 }}>
        <br />
        <h2>Login Form</h2>
        <br />
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </div>
    </div>
  );
}

export default App;
