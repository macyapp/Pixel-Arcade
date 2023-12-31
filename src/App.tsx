// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";
import { produce } from "immer";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  // Create a ref to track the initial render
  const isInitialRender = useRef(true);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // draft is a proxy object that records the changes we're going to apply to the bugs array
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  // Use useEffect to log changes to the bugs array
  useEffect(() => {
    if (isInitialRender.current) {
      // If it's the first render, update the ref and don't log
      isInitialRender.current = false;
    } else {
      // Not the initial render, so log the updated bugs
      console.log("Updated bugs:", bugs);
    }
  }, [bugs]); // This effect runs whenever the bugs array changes

  return (
    <>
      <Button color="primary" onButtonClick={handleClick}>
        Click Me
      </Button>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "Not Fixed"}
        </p>
      ))}
    </>
  );
};

export default App;
