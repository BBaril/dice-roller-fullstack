import React, { useState } from "react";
import "./App.css";
import diceIcon from "./magic-trick.png";

function App() {
  const [roll, setRoll] = useState("");

  const rollDice = async () => {
    // Clear the dice value so re-render triggers the animation again
    setRoll("");

    try {
      const response = await fetch("https://twodice-backend.onrender.com/roll");
      const data = await response.json();
      // Short delay so we see the dice "disappear" briefly
      setTimeout(() => {
        setRoll(data.result);
      }, 50);
    } catch (error) {
      console.error("Error fetching dice roll:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">
      Dice Roller <img
       className="title-icon"
       src= {diceIcon}
       alt="Dice icon"
       />
       </h1>

      {/* Add the dice-rolled class if we have a roll value. */}
      <h2 className={`dice ${roll ? "dice-rolled" : ""}`}>
        {roll}
      </h2>

      <button className="roll-button" onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
}

export default App;
