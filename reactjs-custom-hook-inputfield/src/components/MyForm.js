import React from "react";
import useInputFieldHook from "../hooks/useInputFieldHook";

const MyForm = () => {
  const [
    firstName,
    handleFirstNameChange,
    restFirstNameInput
  ] = useInputFieldHook("");
  const [lastName, handleLastNameChange, restLastNameInput] = useInputFieldHook(
    ""
  );

  const handleSubmitForm = event => {
    event.preventDefault();
    alert(`${firstName} ${lastName} `);
    restFirstNameInput();
    restLastNameInput();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h1>USER INPUT FORM </h1>
      <br />
      <label>First Name </label> &nbsp;
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <br />
      <label>Last Name </label> &nbsp;
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <br />
      <button>SUBMIT</button>
    </form>
  );
};

export default MyForm;
