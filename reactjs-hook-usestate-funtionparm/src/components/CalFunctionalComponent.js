import React from "react";

const CalFunctionalComponent = () => {
  const initCount = 0;
  const [count, setCount] = React.useState(initCount);
  return (
    <div>
      <h1>Functional Component {count}</h1>
      <div>
        <label>increment</label>&nbsp;
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          incrmented
        </button>
      </div>
      <br />
      <div>
        <label>decrement</label>&nbsp;
        <button onClick={() => setCount(prevCount => prevCount - 1)}>
          decrement
        </button>
      </div>
      <br />
      <div>
        <label>rest</label>&nbsp;
        <button onClick={() => setCount(initCount)}> rest </button>
      </div>
    </div>
  );
};

export default CalFunctionalComponent;
