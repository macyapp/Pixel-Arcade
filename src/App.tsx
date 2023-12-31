// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  // Use useEffect to log changes to the bugs array
  useEffect(() => {
    console.log('Updated bugs:', bugs);
  }, [bugs]); // This effect runs whenever the bugs array changes

  return (
    <>
      <Button color="primary" onButtonClick={handleClick}>
        Click Me
      </Button>
    </>
  );
};

export default App;
