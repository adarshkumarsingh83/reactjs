import React from "react";

const FunctionalCounterComponent = () => {
  const [count, setCount] = React.useState(0);
  const counterRef = React.useRef();

  React.useEffect(() => {
    console.log(` useEffect hook ${count}`);
    counterRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(counterRef.current);
    };
  }, []);

  const stopTicking = () => {
    clearInterval(counterRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={stopTicking}>stop counter</button>
    </div>
  );
};

export default FunctionalCounterComponent;
