import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

{/* {alertVisible && (
  <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
  )}
  const [alertVisible, setAlertVisibility] = useState(false);
<Button onClickButton={() => setAlertVisibility(true)}>Show Alert</Button> */}
function App() {
  const items = ["New York", "London", "Paris", "Berlin", "Tokyo"];
  return (
    <>
      <ListGroup items={items} heading="Cities"/>
    </>
  );
}

export default App;
