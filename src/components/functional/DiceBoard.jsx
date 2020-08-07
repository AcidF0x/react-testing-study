import React, {useState} from "react";
import Dice from "../../services/Dice";

const DiceBoard = ({diceRolled}) => {
  const [currentDice, setCurrentDice] = useState(null);
  const rollDice = () => {
    const currentNumber = Dice.roll()
    setCurrentDice(currentNumber)
    diceRolled(currentNumber)
  }

  return (
    <div className="dice-right-panel">
      <div className="dice-result">
        {
          currentDice !== null &&
          <h4>
            { currentDice }가 나왔습니다 !!
          </h4>
        }
      </div>
      <div className="dice-desc">
        <button onClick={rollDice}>던지기</button>
      </div>
    </div>
  )
}
export default DiceBoard;
