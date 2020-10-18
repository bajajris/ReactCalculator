import React from "react";
import classes from "./Decimal.module.css";
const clearAll = (props) => {
  return (
    <div
      onClick={() => props.handleDecimalClick()}
      className={classes.DecimalTile}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default clearAll;
