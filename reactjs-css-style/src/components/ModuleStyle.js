import React from "react";

import styles from "../style/myStyle.module.css";

class ModuleStyle extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.wishMessage}>REACT MODULE CASS</h1>
      </div>
    );
  }
}

export default ModuleStyle;
