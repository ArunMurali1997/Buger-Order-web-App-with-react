import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  //console.log(classes);
  return (
    <li className={classes.NavigationItem}>
      <a className={props.active ? classes.Alink : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
