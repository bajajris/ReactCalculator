import React from "react";
import classes from "./PositiveNegative.module.css";
const clearAll = (props) => {
  return (
    <div
      onClick={() => props.handleSignChange()}
      className={classes.PositiveNegativeTile}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default clearAll;
