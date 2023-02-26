import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import classes from "./Total.module.css";

function Total() {
  const context = useContext(CartContext);
  return (
    <>
      <div className={classes.total}>
        <h3>Total</h3>
        <h3>{`$ ${
          context.price.toFixed(2) === 0 ? 0 : context.price.toFixed(2)
        }`}</h3>
      </div>
    </>
  );
}

export default Total;
