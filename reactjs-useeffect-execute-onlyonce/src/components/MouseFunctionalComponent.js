import React from "react";

const MouseFunctionalComponent = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const trackMouse = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  React.useEffect(() => {
    console.log("componentDidMount executed");
    document.addEventListener("mousemove", trackMouse);
    return () => {
      console.log("componentDidMount executed remove event");
      document.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>
        Functional Mouse Component Response
        <br /> X cordinate = {x} &nbsp; Y cordinate = {y}
      </h1>
    </div>
  );
};

export default MouseFunctionalComponent;
