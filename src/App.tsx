// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <>
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
    </>
  );
};

export default App;
