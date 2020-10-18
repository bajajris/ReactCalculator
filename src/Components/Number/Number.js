import React from "react";
import classes from "./Number.module.css";
const number = (props) => {
  return (
    <div
      onClick={() => props.handleClick(props.value)}
      className={classes.NumberTile}
    >
      <h3>{props.value}</h3>
    </div>
  );
};
export default number;
