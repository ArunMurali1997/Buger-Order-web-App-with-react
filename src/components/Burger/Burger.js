import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedArray = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((accumltor, currentValue) => accumltor.concat(currentValue), []);
  //if

  //console.log(props.ingredients["meat"]);
  //console.log(transformedArray);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedArray.length === 0 ? (
        <p>Please add ingredients</p>
      ) : (
        transformedArray
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
