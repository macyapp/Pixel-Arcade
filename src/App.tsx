import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const cities = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Seattle",
  ];
  const listName = "Cities";
  return (
    <div>
      <ListGroup items={cities} heading={listName} />
    </div>
  );
}

export default App;
