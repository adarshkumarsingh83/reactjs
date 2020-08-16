import React from "react";

const useCounterHook = (initValue, value) => {
  const [count, setCount] = React.useState(initValue);

  const incrementCount = () => {
    setCount(count + value);
  };

  const decrementCount = () => {
    setCount(count - value);
  };

  const reSetCount = () => {
    setCount(initValue);
  };

  return [count, incrementCount, decrementCount, reSetCount];
};

export default useCounterHook;
