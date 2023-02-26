import { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from "../store/cart-context";
import classes from "./Navigation.module.css";
function Navigation() {
  const { totalAmount } = useContext(CartContext);
  return (
    <nav className={classes.navigation}>
      <div>
        <h1 className={classes.heading}>Cart</h1>
        <button className={classes.btn}>
          <FaShoppingBag fill={"white"} className={classes.bag}></FaShoppingBag>
          <p className={classes.items}>{totalAmount}</p>
        </button>
      </div>
    </nav>
  );
}
export default Navigation;
