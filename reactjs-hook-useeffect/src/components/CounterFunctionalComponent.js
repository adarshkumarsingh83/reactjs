import React, { useEffect } from "react";

const CounterFunctionalComponent = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Count functional ${count}`;
  });

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
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
