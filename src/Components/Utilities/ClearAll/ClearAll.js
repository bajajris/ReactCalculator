import React from "react";
import classes from "./ClearAll.module.css";
const clearAll = (props) => {
  return (
    <div onClick={() => props.handleClear()} className={classes.ClearAllTile}>
      <h3>{props.value}</h3>
    </div>
  );
};

export default clearAll;
