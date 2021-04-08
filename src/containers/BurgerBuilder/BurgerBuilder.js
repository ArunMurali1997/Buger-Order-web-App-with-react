import React, { useState } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  salad: 45.5,
  bacon: 20.42,
  cheese: 35.1,
  meat: 25.6,
};
const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseable, setPurchaseable] = useState(false);
  const [orderNow, setOrderNow] = useState(false); //purchassing
  const updatePurchaseState = () => {
    const ing = { ...ingredients };
    const sum = Object.keys(ing)
      .map((igkey) => ing[igkey])
      .reduce((acc, el) => acc + el, 0);
    setPurchaseable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const aState = { ...ingredients };
    let oldCount = aState[type];
    let updatedCount = oldCount + 1;
    aState[type] = updatedCount;
    const AINGREDIENT_PRICES = { ...INGREDIENT_PRICES };
    let priceAddition = AINGREDIENT_PRICES[type];
    let oldPrice = totalPrice;
    let newPrice = oldPrice + priceAddition;
    setIngredients(aState);
    setTotalPrice(newPrice);
    updatePurchaseState();
  };
  const removeIngredientHandler = (type) => {
    const aState = { ...ingredients };

    let oldCount = aState[type];
    if (oldCount <= 0) {
      return;
    }
    let updatedCount = oldCount - 1;
    aState[type] = updatedCount;
    const AINGREDIENT_PRICES = { ...INGREDIENT_PRICES };
    let priceDeduction = AINGREDIENT_PRICES[type];
    let oldPrice = totalPrice;
    let newPrice = oldPrice - priceDeduction;
    setIngredients(aState);
    setTotalPrice(newPrice);
    updatePurchaseState();
  };
  const isDisabled = (type) => {
    const disabledInfo = { ...ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo[type];
  };
  const purchaseHandler = () => setOrderNow(!orderNow);
  const purchaseCancelHandler = () => setOrderNow(!orderNow);
  const purchaseContinueHandler = () => {
    alert("you continue");
  };
  return (
    <Aux>
      {" "}
      <Modal show={orderNow} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          price={totalPrice}
        />{" "}
      </Modal>
      <div>
        <Burger ingredients={ingredients} />
      </div>
      <div>
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemove={removeIngredientHandler}
          disable={isDisabled}
          purchaseable={purchaseable}
          price={totalPrice}
          ordered={purchaseHandler}
        />
      </div>
    </Aux>
  );
};

export default BurgerBuilder;
