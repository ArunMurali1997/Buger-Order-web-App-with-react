import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active={true}>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/" active>
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
