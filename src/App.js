import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { useContext } from "react";
import { CartContext } from "./store/cart-context";
function App() {
  const { isLoading } = useContext(CartContext);
  return (
    <>
      <Navigation></Navigation>
      {isLoading && (
        <p style={{ fontSize: "3rem", textAlign: "center" }}>Loading...</p>
      )}
      {!isLoading && <Main></Main>}
    </>
  );
}

export default App;
