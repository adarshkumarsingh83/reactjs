import React, { useEffect } from "react";

const CounterFunctionalComponent = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    console.log("useEffect executed and render ");
    document.title = `Count functional ${count}`;
  }, [count]);

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <label> Enter the Name </label>&nbsp;
      <input
        type="text"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement Count
      </button>
    </React.Fragment>
  );
};

export default CounterFunctionalComponent;
