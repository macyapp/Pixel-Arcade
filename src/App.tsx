// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const firstRenderRef = useRef(true);

  const handleClick = () => {
    // setPizza({...pizza, toppings: [...pizza.toppings, "Cheese"]});
    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };

  useEffect(() => {
    if (firstRenderRef.current) {
      // It's the first render, so skip this effect
      firstRenderRef.current = false;
      return;
    }
    // It's not the first render, so run the effect
    console.log(pizza);
  }, [pizza]); // Only re-run the effect if emotion changes

  return (
    <>
      <div>
        <Button onButtonClick={handleClick} color="primary">
          Add Topping
        </Button>
      </div>
    </>
  );
};

export default App;
