// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [colr, setColr] = useState(true);
  function handleClick() {
    setColr(!colr);
  }
  return (
    <div className="app">
      <button
        style={!colr ? { backgroundColor: "blue" } : { backgroundColor: "red" }}
        onClick={handleClick}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
