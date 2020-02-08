import React from "react";

function ChildComponent({ name }) {
  console.log("ChildComponent render()");
  return <h1>{name}</h1>;
}

export default ChildComponent;
