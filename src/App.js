import classes from "./App.module.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return (
    <div className={classes.App}>
      {" "}
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
