import React from "react";

const FunctionalComponent = () => {
  const [items, setItems] = React.useState([]);

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
    console.log(JSON.stringify(items));
  };

  return (
    <React.Fragment>
      <form>
        <br />
        <br />
        <br />
        <label> Click for Adding Number</label> &nbsp;
        <button onClick={addItem}>ADD NUMBER</button>
      </form>
      <br />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      {JSON.stringify(items)}
    </React.Fragment>
  );
};
export default FunctionalComponent;
