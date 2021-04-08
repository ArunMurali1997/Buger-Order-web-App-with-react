import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary";

const sideDrawer = (props) => {
  const isBackdropClicked = () => {
    if (props.open) {
      return [classes.SideDrawer, classes.Open].join(" ");
    }
    return [classes.SideDrawer, classes.Close].join(" ");
  };
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={isBackdropClicked()}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
