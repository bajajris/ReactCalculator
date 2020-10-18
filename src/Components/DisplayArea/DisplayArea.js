import React from "react";
import classes from "./DisplayArea.module.css";
const displayArea = (props) => {
  return (
    <div className={classes.DisplayArea}>
      <input type="text" value={props.value} disabled />
      <p className={classes.OperatorDisplay}>{props.operator}</p>
    </div>
  );
};

export default displayArea;
