import React from "react";

function MemoChildComponent({ name }) {
  console.log("MemoChildComponent render()");
  return <h1>{name}</h1>;
}
export default React.memo(MemoChildComponent);
