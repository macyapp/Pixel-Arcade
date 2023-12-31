// import Like from "./components/Like";
// import Message from "./components/Message";
import Button from "./components/Button";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [emotion, setEmotion] = useState(["happy", "sad", "angry"]);
  const firstRenderRef = useRef(true);

  const handleClick = () => {
    // When the button is clicked add new item in the array
    // We can't do tags.push() as it modifies the original array
    // Instead we can
    setEmotion((currentEmotion) => {
      // Add "exciting" to the array
      let updatedEmotion = [...currentEmotion, "exciting"];

      // Remove "happy" from the array
      updatedEmotion = updatedEmotion.filter((emotion) => emotion !== "happy");

      // Update "happy" to "happiness" in the array
      return updatedEmotion.map((emotion) =>
        emotion === "happy" ? "happiness" : emotion
      );
    });
    console.log(emotion);
  };

  useEffect(() => {
    if (firstRenderRef.current) {
      // It's the first render, so skip this effect
      firstRenderRef.current = false;
      return;
    }
    // It's not the first render, so run the effect
    console.log(emotion);
  }, [emotion]); // Only re-run the effect if emotion changes

  return (
    <>
      <Button color="primary" onButtonClick={handleClick}>
        Click Me
      </Button>
    </>
  );
};

export default App;
