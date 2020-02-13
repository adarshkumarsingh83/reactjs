import React from "react";

const FunctionalComponent = () => {
    
  const [name, setName] = React.useState({ firstName: "", lastName: "" });

  return (
    <form>
      <br />
      <br />
      <br />
      <br />
      <label> Enter the First Name </label>&nbsp;
      <input
        type="text"
        value={name.firstName}
        onChange={event =>
          setName({
            ...name,
            firstName: event.target.value
          })
        }
      />
      <br />
      <label> Enter the Last Name </label>&nbsp;
      <input
        type="text"
        value={name.lastName}
        onChange={event =>
          setName({
            ...name,
            lastName: event.target.value
          })
        }
      />
      <br />
      <h2> {JSON.stringify(name)}</h2>
      <br />
      <h2>
        FirstName = {name.firstName} &nbsp; LastName = {name.lastName}
      </h2>
    </form>
  );
};

export default FunctionalComponent;
