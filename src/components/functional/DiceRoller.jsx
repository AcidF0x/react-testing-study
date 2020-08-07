import React, {useState} from "react";
import ScoreBoard from "./ScoreBoard";
import DiceBoard from "./DiceBoard";
const DiceRoller = () => {
  const [totalScore, setTotalScore] = useState(0);

  const updateTotalScore = (diceNumber) => {
    const currentScore = diceNumber + totalScore
    if(currentScore >= 100) {
      setTotalScore(0)
      alert('100점이 넘어 게임이 초기화 됩니다')
    } else {
      setTotalScore(currentScore)
    }
  }

  return (
    <>
      <h1 className="text-center">주사위 던지기</h1>
      <div className="dice-warp">
        <ScoreBoard totalScore={totalScore}/>
        <DiceBoard diceRolled={updateTotalScore}/>
      </div>
    </>
  );
}

export default DiceRoller;