import { createContext, useState, useEffect } from "react";
const url = "https://course-api.com/react-useReducer-cart-project";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addToCart(id) {},
  removeToCart(id) {},
  clearCart() {},
  isLoading:true,
  price: 0,
});

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      let tempPrice = 0;
      for (let item of data) {
        tempPrice += +item.price;
      }
      setPrice(tempPrice);
      setTotalAmount(data.length);
      setItems(data);
      setIsLoading(false)
    };
    fetchData();
  }, []);

  const addToCart = (id) => {
    const elementIndex = items.findIndex((val) => val.id === id);
    const element = items[elementIndex];
    element.amount++;
    items[elementIndex] = element;
    const newPrice = price + +element.price;
    setPrice(newPrice);
    setItems((prevState) => prevState);
    setTotalAmount(totalAmount + 1);
  };

  const removeToCart = (id) => {
    const elementIndex = items.findIndex((val) => val.id === id);
    const element = items[elementIndex];
    setPrice((prevState) => prevState - +element.price);
    setTotalAmount(totalAmount - 1);

    if (element.amount === 1) {
      setItems((prevState) => [...items.filter((val) => val.id !== id)]);
      return;
    }

    element.amount--;

    items[elementIndex] = element;
    setItems((prevState) => prevState);
  };

  const clearCart = () => {
    setItems([]);
  };
  return (
    <CartContext.Provider
      value={{isLoading, items, totalAmount, price, addToCart, removeToCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
