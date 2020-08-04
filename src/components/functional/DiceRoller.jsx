import React, {useState} from "react";
import Dice from "../../services/Dice";
const DiceRoller = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(null);

  const resetGame = () => {
    setTotalScore(0)
    setCurrentDice(0)
  }
  const rollDice = () => {
    const currentNumber = Dice.roll()
    setCurrentDice(currentNumber)
    setTotalScore(totalScore + currentNumber)

    if (totalScore > 100) {
      resetGame()
      alert('100점이 넘어 게임이 초기화 됩니다')
    }
  }

  return (
    <>
      <h1 className="text-center">주사위 던지기</h1>
      <div className="dice-warp">
        <div className="dice-score-board">
          <div className="text-center">
            <h3>총점수</h3>
            <div className="score">
              { totalScore }
            </div>
          </div>
        </div>
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
            <button onClick={()=> rollDice()}>던지기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiceRoller;