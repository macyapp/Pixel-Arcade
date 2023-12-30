// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [counter, updateCounter] = useState({
    count: 0,
  });

  const handleClick = () => {
    updateCounter({ ...counter, count: counter.count + 1 });
    console.log("Clicked", counter.count+1);
  };

  return (
    <>
      <Button color="primary" onButtonClick={handleClick}>
        Click Me {counter.count}
      </Button>
    </>
  );
};

export default App;
