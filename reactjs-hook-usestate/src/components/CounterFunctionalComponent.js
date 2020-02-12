import React from "react";

const CounterFunctionalComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <label> Functional Component</label>&nbsp;
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        current count : {count}
      </button>
    </div>
  );
};

export default CounterFunctionalComponent;
