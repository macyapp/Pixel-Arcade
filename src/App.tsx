// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [counter, updateCounter] = useState({
    count: 0,
    nested: {
      innercount: 0,
    },
  });

  const handleClick = () => {
    updateCounter({
      ...counter,
      nested: { ...counter.nested, innercount: counter.nested.innercount + 1 },
    });
    console.clear();
    console.log("Clicked", counter.nested.innercount + 1);
  };

  return (
    <>
      <Button color="primary" onButtonClick={handleClick}>
        Click Me {counter.nested.innercount}
      </Button>
    </>
  );
};

export default App;
