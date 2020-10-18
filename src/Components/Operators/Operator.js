import React from "react";
import classes from "./Operator.module.css";
const operator = (props) => {
  return (
    <div
      onClick={() => props.handleOperation(props.value)}
      className={classes.OperatorTile}
    >
      <h3>{props.value}</h3>
    </div>
  );
};
export default operator;
