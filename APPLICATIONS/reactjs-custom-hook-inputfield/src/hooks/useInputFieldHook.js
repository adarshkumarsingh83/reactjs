import React from "react";

const useInputFieldHook = initValue => {
  const [value, setValue] = React.useState(initValue);

  const restInput = () => {
    console.log(`restInput ${value}`);
    setValue(initValue);
  };

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setValue(event.target.value);
  };
  return [value, handleChange, restInput];
};

export default useInputFieldHook;
