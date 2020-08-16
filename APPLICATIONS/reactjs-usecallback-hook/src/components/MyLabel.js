import React from "react";
const MyLabel = ({ title, count }) => {
  console.log(`MyLable Rendering ${title} ${count}`);
  return (
    <h1>
      {title} &nbsp; {count}
    </h1>
  );
};

export default React.memo(MyLabel);
