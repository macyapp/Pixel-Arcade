import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const cities = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Seattle",
  ];
  const listName = "Cities";

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading={listName}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
