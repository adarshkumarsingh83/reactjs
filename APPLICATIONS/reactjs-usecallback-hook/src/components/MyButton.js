import React from "react";

const MyButton = ({ actionFunction, children }) => {
  console.log(`MyButton Rendering`);
  return (
    <div>
      <button onClick={actionFunction}>{children}</button>
    </div>
  );
};

export default React.memo(MyButton);
