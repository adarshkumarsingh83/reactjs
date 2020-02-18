import React from "react";

const useInputFieldHook = initValue => {
  const [value, setValue] = React.useState(initValue);

  const restInput = () => {
    setValue(initValue);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };
  return [value, handleChange, restInput];
};

export default useInputFieldHook;
