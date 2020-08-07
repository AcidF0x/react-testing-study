import React from "react";
import DiceBoard from "./DiceBoard";
import ScoreBoard from "./ScoreBoard";

class DiceRoller extends React.Component {
  state = {
    totalScore: 0
  }
  updateTotalScore = (diceNumber) => {
    const currentScore = diceNumber + this.state.totalScore
    if (currentScore >= 100) {
      this.setState({
        totalScore: 0,
      })
      alert('100점이 넘어 게임이 초기화 됩니다')
    } else {
      this.setState({
        totalScore: currentScore,
      })
    }
  }
  render() {
    return (
      <>
        <h1 className="text-center">주사위 던지기</h1>
        <div className="dice-warp">
          <ScoreBoard totalScore={this.state.totalScore}/>
          <DiceBoard diceRolled={this.updateTotalScore}/>
        </div>
      </>
    );
  }
}
export default DiceRoller;