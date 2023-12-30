import Like from "./components/Like";

const App = () => {
  return (
    <>
      <Like onButtonClick={() => {console.log("clicked")}}/>
    </>
  );
};

export default App;
