// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const firstRenderRef = useRef(true);

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  useEffect(() => {
    if (firstRenderRef.current) {
      // It's the first render, so skip this effect
      firstRenderRef.current = false;
      return;
    }
    // It's not the first render, so run the effect
    console.log(cart);
  }, [cart]); // Only re-run the effect if emotion changes

  return (
    <>
      <div>
        <Button onButtonClick={handleClick} color="primary">
          Click me
        </Button>
      </div>
    </>
  );
};

export default App;
