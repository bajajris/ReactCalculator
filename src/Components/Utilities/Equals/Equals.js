import React from "react";
import classes from "./Equals.module.css";
const operator = (props) => {
  return (
    <div onClick={() => props.handleEquals()} className={classes.EqualsTile}>
      <h3>{props.value}</h3>
    </div>
  );
};
export default operator;
