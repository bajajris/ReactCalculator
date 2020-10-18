import React from "react";
import classes from "./Backspace.module.css";
const backspace = (props) => {
  return (
    <div
      onClick={() => props.handleBackspace()}
      className={classes.BackspaceTile}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default backspace;
