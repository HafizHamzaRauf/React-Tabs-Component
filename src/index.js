import ReactDOM from "react-dom";
import "./index.css";
import { render } from "react-dom";
import App from "./App";
import { CartProvider } from "./store/cart-context";
render(
  <CartProvider>
    <App></App>,
  </CartProvider>,
  document.getElementById("root")
);
