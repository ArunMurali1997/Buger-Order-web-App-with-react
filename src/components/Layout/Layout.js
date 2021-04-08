import React, { useState } from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerCloseHandler = () => setShowSideDrawer(!showSideDrawer);
  const sideDrawerMenuHandler = () => setShowSideDrawer(!showSideDrawer); // sideDrawerToggleHandler
  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerMenuHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};
export default Layout;
