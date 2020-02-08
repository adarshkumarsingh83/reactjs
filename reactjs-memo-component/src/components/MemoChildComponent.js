import React from "react";

const MemoChildComponent = ({ name }) => {
  console.log("MemoChildComponent render()");
  return <h1>{name}</h1>;
};
export default React.memo(MemoChildComponent);
