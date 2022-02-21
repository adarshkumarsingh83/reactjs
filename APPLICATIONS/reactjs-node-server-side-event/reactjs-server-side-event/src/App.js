import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


function App() {

  const [message, setMessage] = useState([]);
  
  const initMessage = () => {
    setMessage('welcome to the espark init state');
  };

  useEffect(() => {
    initMessage();
    const eventSource = new EventSource(`http://localhost:8080/espark`);
    //eventSource.onmessage = (e) => setMessage(e.data);
    eventSource.onmessage = (e) => formatJsonMessage(e.data);
    return () => {
      eventSource.close();
    };
  }, []);

  const formatJsonMessage = (data) => {
    const messageData = JSON.parse(data);
    setMessage(messageData.msg);
  }

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
