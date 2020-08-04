import React from 'react'
import './App.css'
import FDiceRoller from "./components/functional/DiceRoller"
import CDiceRoller from "./components/class/DiceRoller"

function App() {
  return (
    <div>
      <FDiceRoller/>
      <CDiceRoller/>
    </div>
  );
}

export default App;
