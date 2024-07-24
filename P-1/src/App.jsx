import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const reduceCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Karam killed persons:{counter}</h1>
      <h2>Karam is a bad person</h2>
      <button onClick={addCounter}>Add</button> {"  "}
      <button onClick={reduceCounter}>Delete</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;
