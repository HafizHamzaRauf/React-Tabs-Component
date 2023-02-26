import { useContext } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CartContext } from "../store/cart-context";
import classes from "./Item.module.css";
function Item({ name, price, altText, src, id, amount }) {
  const context = useContext(CartContext);
  const addHandler = (e) => {
    context.addToCart(id);
  };
  const removeHandler = (e) => {
    context.removeToCart(id);
  };
  return (
    <>
      <div className={classes.container}>
        <img src={src} alt={altText} />
        <div className={classes.info}>
          <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <button className={classes.remove}>remove</button>
          </div>
          <div className={classes.arrow}>
            <button id={id} onClick={addHandler}>
              <FaArrowUp
                className={classes.icons}
                fill="blue"
                size={"16"}
              ></FaArrowUp>
            </button>
            <p>{amount}</p>
            <button id={id} onClick={removeHandler}>
              <FaArrowDown
                className={classes.icons}
                fill="blue"
                size={"16"}
              ></FaArrowDown>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
