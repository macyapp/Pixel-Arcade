// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";
import { produce } from "immer";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      firstName: "John",
    },
  });

  // Create a ref to track the initial render
  const isInitialRender = useRef(true);

  const handleClick = () => {
    // setGame({ ...game, player: { ...game.player, firstName: "Sid" } });
    setGame(
      produce((draft) => {
        draft.player.firstName = "Sid";
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
      console.log(game);
    }
  }, [game]); // This effect runs whenever the bugs array changes

  return (
    <>
      <Button color="primary" onButtonClick={handleClick}>
        Click Me
      </Button>
      <p>Player Name: {game.player.firstName}</p>
    </>
  );
};

export default App;
