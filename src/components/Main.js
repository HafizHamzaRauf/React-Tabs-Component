import Item from "./Item";
import classes from "./Main.module.css";
import Total from "./Total";
import { CartContext } from "../store/cart-context";
import { useContext } from "react";
function Main() {
  const { items, clearCart } = useContext(CartContext);

  const clearHandler = () => {
    clearCart();
  };
  const content = items.map((val) => (
    <Item
      id={val.id}
      amount={val.amount}
      key={val.id}
      name={val.title}
      price={val.price}
      altText={`${val.title} photo`}
      src={val.img}
    ></Item>
  ));
  return (
    <>
      {items.length > 0 ? (
        <section className={classes.main}>
          <h1 className={classes.heading}>Your Bag</h1>
          {content}
          <hr></hr>
          <Total></Total>
          <button onClick={clearHandler} className={classes.btn}>
            CLEAR CART
          </button>
        </section>
      ) : (
        <p style={{ textAlign: "center", fontSize: "2rem" }}>
          your bag is emtpy
        </p>
      )}
    </>
  );
}
export default Main;
