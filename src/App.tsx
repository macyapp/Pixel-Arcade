// import Like from "./components/Like";
import Message from "./components/Message";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [counter, updateCounter] = useState({
    count: 5,
  });

  const handleClick = () => {
    updateCounter({...counter, count: counter.count+1});
  };

  return (
    <>
      {counter.count}
      <Button color="primary" onButtonClick={handleClick}>
        Click Me
      </Button>
    </>
  );
};

export default App;
